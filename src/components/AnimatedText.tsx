import { Children, cloneElement, Fragment, isValidElement } from 'react'

const letterGap = 34
const wordGap = 14

/**
 * When the letters of a dropped title start, in ms. Letters start 34ms apart, or closer
 * on long titles so the last one starts within `spread` of the first. `last` is when
 * the last letter starts, for timing whatever comes after the title.
 */
export function letterTiming(
  text: string,
  { start = 100, spread = 500 }: { start?: number; spread?: number } = {},
) {
  let count = text.replace(/\s/g, '').length
  let step = count > 1 ? Math.min(letterGap, spread / (count - 1)) : 0
  return { start, step, last: start + Math.max(count - 1, 0) * step }
}

/**
 * A title whose letters fall in one after another, squash as they land and settle. It
 * is pure CSS, so it plays on first paint. `soft` is a smaller squash for page titles.
 * `hop` leaves a gap for the first letter, which then hops in late from the left. The
 * letters are hidden from screen readers, so put the plain text beside them in an
 * sr-only span.
 */
export function DropLetters({
  text,
  start,
  spread,
  soft = false,
  hop = false,
  className,
}: {
  text: string
  start?: number
  spread?: number
  soft?: boolean
  hop?: boolean
  className?: string
}) {
  let timing = letterTiming(text, { start, spread })
  let words = text.split(' ')
  let offsets = words.map((_, index) =>
    words.slice(0, index).reduce((sum, word) => sum + word.length, 0),
  )

  return (
    <span aria-hidden="true" className={className}>
      {words.map((word, wordIndex) => (
        <Fragment key={wordIndex}>
          {wordIndex > 0 && ' '}
          <span className="inline-block whitespace-nowrap">
            {Array.from(word, (letter, letterIndex) => {
              let index = offsets[wordIndex] + letterIndex
              let isHop = hop && index === 0
              return (
                <span
                  key={letterIndex}
                  className={
                    isHop
                      ? 'hop-letter'
                      : soft
                        ? 'drop-letter-soft'
                        : 'drop-letter'
                  }
                  style={
                    isHop
                      ? undefined
                      : {
                          '--d': `${Math.round(timing.start + index * timing.step)}ms`,
                        }
                  }
                >
                  {letter}
                </span>
              )
            })}
          </span>
        </Fragment>
      ))}
    </span>
  )
}

type TextParent = React.ReactElement<{ children?: React.ReactNode }>

/** Plain elements and fragments, whose text gets split into words. */
function isTextParent(node: React.ReactNode): node is TextParent {
  return (
    isValidElement(node) &&
    (typeof node.type === 'string' || node.type === Fragment)
  )
}

function countWords(node: React.ReactNode): number {
  let total = 0
  Children.forEach(node, (child) => {
    if (typeof child === 'string' || typeof child === 'number') {
      total += String(child).split(/\s+/).filter(Boolean).length
    } else if (isTextParent(child)) {
      total += countWords(child.props.children)
    } else if (isValidElement(child)) {
      total += 1
    }
  })
  return total
}

function splitWords(
  node: React.ReactNode,
  nextDelay: () => string,
  isTopLevel: boolean,
): React.ReactNode {
  return Children.map(node, (child) => {
    if (typeof child === 'string' || typeof child === 'number') {
      return String(child)
        .split(/(\s+)/)
        .map((part, index) =>
          part.trim() === '' ? (
            part
          ) : (
            <span
              key={index}
              className="cascade-word"
              style={{ '--d': nextDelay() }}
            >
              {part}
            </span>
          ),
        )
    }
    if (isTextParent(child)) {
      return cloneElement(
        child,
        undefined,
        splitWords(child.props.children, nextDelay, false),
      )
    }
    if (isValidElement(child)) {
      let style = { '--d': nextDelay() }
      return isTopLevel ? (
        <div className="cascade-block" style={style}>
          {child}
        </div>
      ) : (
        <span className="cascade-word" style={style}>
          {child}
        </span>
      )
    }
    return child
  })
}

/**
 * Brings text in word by word, each word rising a little after the one before, like a
 * wave running left to right. Pure CSS, so it plays on first paint. It walks plain
 * elements like paragraphs and links to find the words. Components such as buttons
 * come in whole, in their place in the wave. On long text the words start closer
 * together so the last one starts within `spread` ms of `start`.
 */
export function WordCascade({
  children,
  start = 0,
  spread = 700,
}: {
  children: React.ReactNode
  start?: number
  spread?: number
}) {
  let count = countWords(children)
  let step = count > 1 ? Math.min(wordGap, spread / (count - 1)) : 0
  let index = 0

  function nextDelay() {
    return `${Math.round(start + index++ * step)}ms`
  }

  return <>{splitWords(children, nextDelay, true)}</>
}
