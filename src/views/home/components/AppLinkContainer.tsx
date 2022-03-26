import { LinkContainer } from '@/views/home/styles/homeStyles';
import { Button } from '@/components/Button';
import React from 'react';
import { NavigateFunction, useNavigate } from 'react-router-dom';

export default function AppLinkContainer() {
  const navigate: NavigateFunction = useNavigate();
  return (
    <LinkContainer>
      <Button onClick={() => navigate('/air')}>Air</Button>
      <Button onClick={() => navigate('/lexicon')}>Lexicon</Button>
      <Button onClick={() => navigate('/wh00t')}>wh00t</Button>
      <Button onClick={() => navigate('/debug')}>debug</Button>
    </LinkContainer>
  );
}
