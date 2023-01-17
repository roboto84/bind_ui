import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { useArcadiaWordSearch } from '@/dataSource/reactQueryHooks';
import Loader from '@/components/Misc/Loader';
import { ErrorViewDefault } from '@/components/Error/ErrorViewDefault';
import camelcaseKeys from 'camelcase-keys';
import { HomeSection } from '@/views/search/styles/searchStyles';
import { ArcadiaContainer, ArcResultTimeStamp, SubTagHeader } from './styles/arcadiaStyles';

export function ArcadiaSearch() {
  const [searchParams] = useSearchParams();
  const searchWord: string = searchParams.get('word');
  const { data, error, isLoading, isError } = useArcadiaWordSearch(searchWord);

  if (isLoading) {
    return (<Loader />);
  }
  if (isError) {
    return (<ErrorViewDefault errorMessage={error.message} />);
  }

  console.log(data);
  const wordSearchResponse: any = camelcaseKeys<any>(
    data,
    { deep: true },
  );
  const mainNode = wordSearchResponse.mainNode
    ? wordSearchResponse.mainNode.urls.map(
      (url: any) => (
        <div
          style={{ color: 'rgb(145, 184, 16)', padding: '10px 0 0 0' }}
          key={'mainNodeUrl'.concat(url.timeStamp)}
        >
          <ArcResultTimeStamp>{url.timeStamp} </ArcResultTimeStamp>
          <span>
            <a href={url.data} rel="noreferrer" target="_blank">{url.data}</a>
          </span>
        </div>
      ),
    )
    : <div />;

  const subNodes = wordSearchResponse.subNode.map(
    (element: any) => (
      <div key={'subNodeSubject'.concat(element.subject)}>
        <SubTagHeader>{element.subject}</SubTagHeader>
        <div style={{ paddingLeft: '100px' }}>
          {
            element.urls.map((url: any) => (
              <div
                style={{ color: 'rgb(145, 184, 16)', padding: '10px 0 0 0' }}
                key={'subNodeUrl'.concat(url.timeStamp)}
              >
                <ArcResultTimeStamp>{url.timeStamp} </ArcResultTimeStamp>
                <span>
                  <a href={url.data} rel="noreferrer" target="_blank">{url.data}</a>
                </span>
              </div>
            ))
          }
        </div>
      </div>
    ),
  );

  return (
    <ArcadiaContainer>
      <HomeSection>
        <h1 style={{ marginBottom: '25px' }}>{wordSearchResponse.subject}</h1>
        <div style={{ marginLeft: '50px' }}>
          {mainNode}
        </div>
        {subNodes}
      </HomeSection>
    </ArcadiaContainer>
  );
}
