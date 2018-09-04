import React ,{Component} from 'react';
import {Column,ColumnLabels,Container,GameList,GameListHeader,GameRecord,Name} from '../styled/Profile'
// import Relay from "react-relay";

class Profile extends Component {
    static defaultProps = {
      user:{
          email:'USER_EMAIL',
          games:[
              {
                  winner:true,
                  createdAt:'25/12/2014',
                  id:'0001'
              },
              {
                  winner:true,
                  createdAt:'26/12/2014',
                  id:'0002'
              },
              {
                  winner:false,
                  createdAt:'27/12/2014',
                  id:'0003'
              }
          ]
      }
    };

    get records() {
        return this.props.user.games.map((game,index) => {
            return(
                <GameRecord key={index} index={index}>
                    <Column>
                        {(game.winner) ? 'Won':"Didn't Win"}
                    </Column>
                    <Column>
                        "ROBOT"
                    </Column>
                    <Column>
                        "NO"
                    </Column>
                    <Column>
                        {game.createdAt}
                    </Column>
                </GameRecord>
            )
        })
    }

    render(){
        let{email} = this.props.user;
        return(
            <Container>
                <Name>
                    {email}
                </Name>
                <GameList>
                    <GameListHeader>
                        MyGames
                    </GameListHeader>
                    <ColumnLabels>
                        <Column>
                            Outcome
                        </Column>
                        <Column>
                            Guess
                        </Column>
                        <Column>
                            Guessed Correctly
                        </Column>
                        <Column>
                            Date
                        </Column>
                    </ColumnLabels>
                    {this.records}
                </GameList>
            </Container>
        )
    }
}

// export default Relay.createContainer(
//     Profile,{
//         fragments:{
//             viewer:() => Relay.QL`
//                 fragment on Viewer{
//                     user {
//                         id
//                     }
//
//                 }
//             `,
//         }
//     }
//
// );

export default Profile