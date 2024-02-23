import { Box } from "@mui/material"
import ConstructionIcon from '@mui/icons-material/Construction';
import FolderIcon from '@mui/icons-material/Folder';
import { useTheme } from "@mui/material/styles";
import { useEffect, useState } from "react";
import Badge from "../Badge/Badge";

function getDarkColor() {
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += Math.floor(Math.random() * 10);
    }
    return color;
}


interface PropInterface {
    project: any
}


const ProjectBox = ({project} : PropInterface) => {
  const theme = useTheme()
  project
    const [technology, setTechnologies] = useState<any>([])
    const [languages, setLanguage] = useState<any>([])

    useEffect(() => {
        project.languages.nodes = project.languages.nodes.length > 6 ? project.languages.nodes.slice(0,7) : project.languages.nodes
        if (project.repositoryTopics.nodes.length) {
            setTechnologies(project.repositoryTopics.nodes)
        }
        if (project.languages.nodes.length) {
            setLanguage(project.languages.nodes)
        }
    }, [])

  return (
    <Box key={project.name} sx={{display: 'flex', flexDirection: 'column', gap: '.5rem', whiteSpace: "nowrap", overflow: "hidden"}} className='project' >
        <section style={{display: 'flex', gap: '1rem', justifyContent: "center"}}>
            <ConstructionIcon />
            <h2 style={{color: theme.palette.text.primary }} className="project-name" >{project.name}</h2>
            <ConstructionIcon />
        </section>
        <section style={{color: theme.palette.text.secondary }} >
            <h4 style={{textAlign: 'center'}}>
                {project.description}
            </h4>
        </section>
        {technology.length > 0 && 
            <section  style={{color: '#d9b63c', display: 'flex', flexDirection: 'column'}} >
                <h3>Topics</h3>
                <Box className="grid-container grid-tech-fit" sx={{gap: '.3rem', alignItems: 'center', padding: '.5rem'}}>
                    {technology.map( (item : any) => (
                        <div key={item.topic.name} >
                            <Badge text={item.topic.name} color ={getDarkColor()} textColor={'white'} />
                        </div>
                    ))}
                </Box>
            </section>
        }
        {languages.length > 0 && 
            <section style={{color: '#d9b63c', display: 'flex', flexDirection: 'column'}} >
                <h3>Languages</h3>
                <Box className="grid-container grid-tech-fit" sx={{gap: '.3rem', alignItems: 'center', padding: '.5rem'}}>
                    {languages.map( (item : any) => (
                        <div key={item.name} >
                            <Badge  text={item.name} color ={item.color} textColor={'black'} />
                        </div>
                    ))}
                </Box>
            </section>
        }
        <section style={{display: 'flex', justifyContent: 'space-between', color: '#3f50b5', alignItems: 'center'}} >
            <div className="folder" >
                <a href={project.url} target="_blank" style={{gap: '.5rem', display: 'flex', alignItems: 'center'}}>
                    <h4>More info</h4>
                    <FolderIcon />
                </a>
            </div>
            <div className="flex-container" style={{gap: '1rem'}}>
                <div>⭐</div>
                <h3>{project.stargazerCount}</h3>
            </div>
        </section>
    </Box>
  )
}

export default ProjectBox