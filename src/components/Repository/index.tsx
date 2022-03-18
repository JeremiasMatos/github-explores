import { useState ,useEffect } from "react";
import { RepositoryItem } from "../RepoItem";

 type RepositoryType={
     name:string
     description:string,
     html_url:string
 }

export function Repository(){
    const [repository,setRepository] = useState<RepositoryType[]>([])

    useEffect(()=>{
        fetch("https://api.github.com/orgs/Rocketseat/repos")
        .then(response => response.json()).then(data => setRepository(data))
    }, [repository]) 

    return(
        <div> 
           
            <ul>
                {repository.map(repository => {
                    return <RepositoryItem  repository = {repository} key={repository.name} />
                    })}
            </ul>
           
        </div>
    );
}