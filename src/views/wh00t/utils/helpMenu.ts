function helpMenuTableRow(commands: {[key: string]: string}): string {
  return ''.concat(...Object.keys(commands).map(
    (command:string) => (`
    <tr>
      <td>${command}</td>
      <td>${commands[command]}</td>
    </tr>
    `),
  ));
}
export function helpMenu(): string {
  const wh00tDescription: string = 'Wh00t is an in memory websocket based chat system '
    + 'that also has access to socket based connections.  It has no major external dependencies.  '
    + 'This makes it a pretty good local LAN chat system with chatbot support.';
  const commands: {[key: string]: string} = {
    '/help or /h': 'Print out help menu',
    '/exit': 'Logout of chat',
    '/clear': 'Clear chat history',
    '[ArrowUp]': 'Last Message',
    '[Ctrl + ArrowUp]': 'Cycle through all your chat history in this current chat session',
    '/lexi': '🤖 Word dictionary chatbot',
    '/air': '🤖 Weather chatbot',
    '/arc': '🤖 Hyperlink collecting and searching chatbot',
  };

  return `<div class="wh00tHelp">
    <h2>Wh00t</h2>
    <p>${wh00tDescription}</p>
    <h2 class="commandHeader">Chat Commands</h2>
    <table>
      <thead>
        <tr>
          <th>Command</th>
          <th>Purpose</th>
        </tr>
      </thead>
      <tbody>
        ${helpMenuTableRow(commands)}
      </tbody>
    </table>
  </div>`;
}
