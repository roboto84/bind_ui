export function introductionMessage(): string {
  return 'Wh00t is an in memory, websocket based, privacy focused chat system '
    + 'that also has access to socket based connections.  It has no major external dependencies.  '
    + 'This makes it a pretty good local LAN chat system with chatbot support.  A big part of wh00t '
    + 'is interacting with bots which help you get information from various systems fast. To explore '
    + 'wh00t\'s features, just message `/help` or `/h`.\n\n'
    + 'Here are some quick hints to communicating with current bots:\n\n'
    + '  ◦ Look up word definitions with `/lexi` (uses the Lexicon chatbot).\n'
    + '  ◦ Check out the current weather Air is tracking with `/air` (This is not your local '
    + 'weather, but the weather the Air system is set to track).\n'
    + '  ◦ Request system information from Gopher activated systems with `/gopher {hostname}`. '
    + 'See which hosts are Gopher activated with `/gopher`.\n'
    + '  ◦ Check out the Arcadia webpage bookmarking system with `/arc`.\n';
}
