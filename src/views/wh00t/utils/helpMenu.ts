export function helpMenu(): string {
  return `<div style="white-space: normal; padding: 10px;">
    <h2 style="margin: 0px;">Wh00t</h2>
    <p>
      Wh00t is an in memory websocket based chat system that also has access to socket based
      connections.  It has no major external dependencies.  This makes it a pretty good local
      LAN chat system with chat bots support.
    </p>
    <h2 style="margin: 0px;">Chat Commands</h2>
    <table style="margin-top: 10px;">
      <tr style="text-align: center;">
        <th style="padding:10px">Command</th>
        <th style="padding:10px">Purpose</th>
      </tr>
      <tr>
        <td style="text-align: center; padding:10px">/help or /h</td>
        <td style="padding:10px">Print out help menu</td>
      </tr>
      <tr>
        <td style="text-align: center; padding:10px">/exit</td>
        <td style="padding:10px">Logout of chat</td>
      </tr>
      <tr>
        <td style="text-align: center; padding:10px">/clear</td>
        <td style="padding:10px">Clear chat history</td>
      </tr>
      <tr>
        <td style="text-align: center; padding:10px">[ArrowUp]</td>
        <td style="padding:10px">Last Message</td>
      </tr>
      <tr>
        <td style="text-align: center; padding:10px">[Ctrl + ArrowUp]</td>
        <td style="padding:10px">Cycle through all your chat history in this current chat session</td>
      </tr>
    </table>
  </div>`;
}
