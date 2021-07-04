import { FC } from 'react';
import { Layout } from '@ghost/components/templates';
import styled from 'styled-components';

export const CSSPostsPage = styled.section`
  display: grid;
  grid-template-rows: auto 1fr;
  height: 100%;
  background-color: ${({ theme }) => theme.palette.primary.main};
  overflow: hidden;
`;

export const CSSHeader = styled.header`
  padding: ${({ theme }) => theme.spacing(1)};
`;

export const CSSHeaderContainer = styled.div`
  ${({ theme }) => theme.breakpoints.up('md')} {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const CSSButton = styled.button`
  padding: ${({ theme }) => theme.spacing(0.5, 1)};
  cursor: pointer;
`;

export const CSSTitleAndButton = styled.div`
  display: flex;
  justify-content: space-between;
  ${({ theme }) => theme.breakpoints.up('md')} {
    button {
      display: none;
    }
  }
`;

export const CSSFiltersAndButton = styled.div`
  ${({ theme }) => theme.breakpoints.up('md')} {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  ${({ theme }) => theme.breakpoints.down('md')} {
    button {
      display: none;
    }
  }
`;
export const CSSListItem = styled.li`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  border-bottom: solid 1px ${({ theme }) => theme.palette.common.white};
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: ${({ theme }) => theme.spacing(1)};
  }
`;

export const CSSMainContent = styled.div`
  height: 100%;
  overflow: hidden;
  padding: ${({ theme }) => theme.spacing(1)};
`;

export const CSSPostsList = styled.ol`
  height: 100%;
  overflow-y: auto;
  border-radius: ${({ theme }) => theme.spacing(1)};
  box-shadow: 0 8px 8px rgba(0, 0, 0, 0.16);
  background-color: ${({ theme }) => theme.palette.primary.dark};
  ${({ theme }) => theme.breakpoints.down('md')} {
    > li:first-child {
      display: none;
    }
  }
`;

const Posts: FC = () => {
  return (
    <Layout>
      <CSSPostsPage>
        <CSSHeader>
          <CSSHeaderContainer>
            <CSSTitleAndButton>
              <h1>POSTS</h1>
              <CSSButton>New Post</CSSButton>
            </CSSTitleAndButton>
            <CSSFiltersAndButton>
              <p>Filtros</p>
              <CSSButton>New Post</CSSButton>
            </CSSFiltersAndButton>
          </CSSHeaderContainer>
        </CSSHeader>
        <CSSMainContent>
          <CSSPostsList>
            <CSSListItem>
              <div>Title</div>
              <div>Status</div>
              <div>List update</div>
            </CSSListItem>
            {new Array(24).fill(null).map(() => (
              <CSSListItem>
                <div>
                  <h3>Titulo del post</h3>
                  <p>Creado por fulanito</p>
                </div>
                <div>
                  <span>Publico</span>
                </div>
                <div>2 meses atras</div>
              </CSSListItem>
            ))}
          </CSSPostsList>
        </CSSMainContent>
      </CSSPostsPage>
    </Layout>
  );
};

export default Posts;
