import { Box } from "@mui/material"
import projectImg from '/src/assets/project.svg'
import folder from '/src/assets/folder.svg'
import { useTheme } from '@emotion/react';
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
  const info = project
    const [technology, setTechnologies] = useState<any>([])
    const [languages, setLanguage] = useState<any>([])

    useEffect(() => {
        if (info.repositoryTopics.nodes.length) {
            setTechnologies(info.repositoryTopics.nodes)
        }
        if (info.languages.nodes.length) {
            setLanguage(info.languages.nodes)
        }
    }, [])

  console.log(info)

  return (
    <Box key={info.name} sx={{display: 'flex', flexDirection: 'column', gap: '.5rem'}} className='project' >
        <section style={{display: 'flex', gap: '1rem'}}>
            <img src={projectImg} alt="" className='project-img' />
            <h2 style={{color: theme.palette.text.primary }} className="project-name" >{info.name}</h2>
        </section>
        <section style={{color: theme.palette.text.secondary }} >
            <h4 style={{textAlign: 'center'}}>
                {info.description}
            </h4>
        </section>
        {technology.length > 0 && 
            <section style={{color: '#d9b63c', display: 'flex', flexDirection: 'column'}} >
                <h3>Technologies</h3>
                <Box className="grid-container grid-tech-fit" sx={{gap: '.3rem', alignItems: 'center', padding: '.5rem'}}>
                    {technology.map( (item : any) => (
                        <Badge text={item.topic.name} color ={getDarkColor()} textColor={'white'} />
                    ))}
                </Box>
            </section>
        }
        {languages.length > 0 && 
            <section style={{color: '#d9b63c', display: 'flex', flexDirection: 'column'}} >
                <h3>Languages</h3>
                <Box className="grid-container grid-tech-fit" sx={{gap: '.3rem', alignItems: 'center', padding: '.5rem'}}>
                    {languages.map( (item : any) => (
                        <Badge text={item.name} color ={item.color} textColor={'black'} />
                    ))}
                </Box>
            </section>
        }
        <section style={{display: 'flex', justifyContent: 'space-between', color: '#3f50b5', alignItems: 'center'}} >
            <div className="folder" >
                <a href={info.url} target="_blank" style={{gap: '.5rem', display: 'flex', alignItems: 'center'}}>
                    <h4>More info</h4>
                    <img src={folder} alt="" className='project-img' />
                </a>
            </div>
            <div className="flex-container" style={{gap: '1rem'}}>
                <div>⭐</div>
                <h3>{info.stargazerCount}</h3>
            </div>
        </section>
    </Box>
  )
}

export default ProjectBox