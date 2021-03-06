import { PageContainer } from './styles';
import Header from '../header';

export default function Page(props) {
  return (
    <PageContainer>
      <Header 
        description={props.description}
        descriptionOnTop={props.descriptionOnTop} 
      />

      {props.children}

    </PageContainer>
  )
}
