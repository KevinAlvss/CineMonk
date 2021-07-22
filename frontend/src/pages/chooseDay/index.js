import PageContainer from '../../components/page';
import BoxDay from '../../components/boxDay'
import { Content } from './styles'

import SessionService from '../../services/sessionService'
import { useEffect, useState } from 'react';

const sessionService = new SessionService();

export default function ChooseDay() {

  const [sessions, setSessions] = useState([null,null,null,null])
  
  useEffect(() => {
    async function loadSessions() {
      let r = await sessionService.listSessions();
      
      setSessions(r);
    }
    loadSessions();
  }, [])


  return (
    <PageContainer 
      description="Escolha a data que você deseja comprar o ingresso"> 
      <Content> 
        
        <BoxDay size="big"
          session={sessions[0]} />
        
        <div className="week-container">

          {sessions.slice(1)
                   .map(session =>
              <BoxDay size="small" session={session}/>
          )}
          
        </div>
      </Content> 
    </PageContainer>
  )
}