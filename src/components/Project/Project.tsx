import { Box } from "@mui/material"
import CodeIcon from '@mui/icons-material/Code';
import FolderIcon from '@mui/icons-material/Folder';
import StarIcon from '@mui/icons-material/Star';
import { useTheme } from "@mui/material/styles";
import { useEffect, useState } from "react";
import Badge from "../Badge/Badge";

function getDarkColor() {
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += Math.floor(Math.random() * 10);
    }
    return color;
}


interface PropInterface {
    project: any
}


const ProjectBox = ({project} : PropInterface) => {
    const theme = useTheme()
    const [technology, setTechnologies] = useState<any>([])
    const [languages, setLanguage] = useState<any>([])

    useEffect(() => {
        if (project.repositoryTopics.nodes.length) {
			project.repositoryTopics.nodes = project.repositoryTopics.nodes.length > 5 ? project.repositoryTopics.nodes.slice(0, 6) : project.repositoryTopics.nodes
            setTechnologies(project.repositoryTopics.nodes)
        }
        if (project.languages.nodes.length) {
			project.languages.nodes = project.languages.nodes.length > 3 ? project.languages.nodes.slice(0, 3) : project.languages.nodes
            setLanguage(project.languages.nodes)
        }
    }, [])

  return (
    <Box key={project.name} sx={{display: 'flex', flexDirection: 'column', gap: '.5rem', }} className='project' >
        <Box component={'section'} 
			sx={{display: 'flex', flexDirection: {xs: 'column', sm: 'row'}, gap: {xs: '.7rem', sm: '1rem'}, justifyContent: "center", alignItems: 'center'}}>
            <CodeIcon sx={{ color: "#DB4437", display: {xs: 'none', sm: 'block'} }} />
            <h2 style={{color: theme.palette.text.primary }} className="project-name" >{project.name}</h2>
            <CodeIcon sx={{ color: "#DB4437", display: {xs: 'none', sm: 'block'} }} />
        </Box>
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
            <section style={{color: '#d9b63c', display: 'flex', flexDirection: 'column', alignContent: 'center'}} >
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
        <Box sx={{display: 'flex', flexDirection: { xs: "column", sm: "row"}, justifyContent: 'space-between', color: '#3f50b5', alignItems: 'center'}} >
            <div className="folder" >
                <a href={project.url} target="_blank" style={{gap: '.5rem', display: 'flex', alignItems: 'center'}}>
                    <FolderIcon sx={{ color: "#DB4437" }} />
                    <h4 style={{ color: "#DB4437" }} >GitHub Link</h4>
                </a>
            </div>
            <div className="flex-container" style={{gap: '1rem'}}>
                <StarIcon sx={{ color: "#F4B400" }} />
                <h3 style={{ color: '#F4B400' }}>{project.stargazerCount}</h3>
            </div>
        </Box>
    </Box>
  )
}

export default ProjectBox