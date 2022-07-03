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

function helpMenuTableGenerator(
  title: string,
  firstColumnTitle: string,
  secondColumnTitle: string,
  commands: {[key: string]: string},
): string {
  return `
  <h2 class="tableHeader">${title}</h2>
  <table>
    <thead>
      <tr>
        <th>${firstColumnTitle}</th>
        <th>${secondColumnTitle}</th>
      </tr>
    </thead>
    <tbody>
      ${helpMenuTableRow(commands)}
    </tbody>
  </table>
  `;
}
export function helpMenu(): string {
  const wh00tDescription: string = 'Wh00t is an in memory websocket based chat system '
    + 'that also has access to socket based connections.  It has no major external dependencies.  '
    + 'This makes it a pretty good local LAN chat system with chatbot support.';

  const commands: {[key: string]: string} = {
    '/help or /h': 'Print out help menu',
    '/exit': 'Logout of chat',
    '/clear or /c': 'Clear chat history',
    '[ArrowUp]': 'Last Message',
    '[Ctrl + ArrowUp]': 'Cycle through all your chat history in this current chat session',
    '/lexi': '🤖 Word dictionary chatbot',
    '/air': '🤖 Weather chatbot',
    '/arc': '🤖 Hyperlink bookmark and search chatbot',
  };

  const formattingSymbols: {[key: string]: string} = {
    '_word_': 'Word or phrase surrounded by a pair of spaced underscores is italicize',
    '*word*': 'Word or phrase surrounded by a pair of spaced asterisks is emboldened',
    '`word`': 'Word or phrase surrounded by spaced backticks is placed as inline code',
    '```word```': 'Word or phrase surrounded by 3 backticks is placed as a code block',
  };

  const specialHandlers: {[key: string]: string} = {
    '[web_address]': 'Any web address is shown in chat as a hyperlink that opens a new tab',
    '[image_address]': 'Any image address is attempted to be shown as a scaled image or hyperlink',
  };

  return `<div class="wh00tHelp">
    <h2>Wh00t</h2>
    <p>${wh00tDescription}</p>
  ${
  helpMenuTableGenerator(
    'Chat Commands',
    'Command',
    'Purpose',
    commands,
  )}
  ${
  helpMenuTableGenerator(
    'Special Chat Handlers',
    'Type',
    'Handling',
    specialHandlers,
  )}
  ${
  helpMenuTableGenerator(
    'Chat Formatting',
    'Symbols',
    'Purpose',
    formattingSymbols,
  )}
  </div>`;
}
