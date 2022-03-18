import '../../style/index.css'

interface RepositoryItemProps{
    repository:{
        name:string,
        description:string,
        html_url:string
    }
}

 export function RepositoryItem(props:RepositoryItemProps){
     return(
        <div className="itemContainer">
             <li>
                 <div className="name-description">
                <strong>{props.repository.name}</strong>
                <p>{props.repository.description}</p>
                </div>
                
                <a href={props.repository.html_url}>
                    Access Repository
                </a>
            </li>
        </div>
     );
 }