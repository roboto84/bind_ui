import React from 'react';

export const appSummaries: {[key: string]: {summary: JSX.Element}} = {
  roboto: {
    summary: (
      <>
        <p>
          Roboto is an attempt at localizing my personal internet.
        </p>
        <p>
          What I mean by that is, when I go on the internet I mostly goto like 5 websites at
          any given time, unless I&#39;m researching, that could mean hundreds of websites.
        </p>
        <p>
          Roboto is there to make my life on the internet more focused and peaceful by
          giving a more simple and customized UI to internet data that I rely on the most.
        </p>
      </>
    ),
  },
  air: {
    summary: (
      <p>
        A weather and climate reporting system that is always configured to the location of my
        choice, and the data I care about.
      </p>
    ),
  },
  lexicon: {
    summary: (
      <p>
        A personal dictionary vocabulary builder that gives me all the data I need on words
        I am curious about.  This includes pronunciation audio for most words.
      </p>
    ),
  },
  wh00t: {
    summary: (
      <p>
        A good chatroom application with slack like features that can be run on a LAN with
        minimum setup.
      </p>
    ),
  },
  debug: {
    summary: (
      <p>
        A look at the raw websocket packages used by roboto for the tinkerers.
      </p>
    ),
  },
};
