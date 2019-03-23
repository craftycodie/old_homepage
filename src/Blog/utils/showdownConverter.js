import showdown from 'showdown'

export default new showdown.Converter(
  {
    tasklists: true,
    smoothLivePreview: true,
    simpleLineBreaks: true,
    ghMentions: true,
    emoji: true,
    underline: true,
    tables: true,
    strikethrough: true
  }
)
