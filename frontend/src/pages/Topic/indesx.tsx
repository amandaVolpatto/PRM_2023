import { Box } from "@mui/material";
import HeaderProfile from "../../components/HeaderProfile";
import TopicList from "../../components/TopicList";


function TopicPage () {

    const profile = {
        fullname: 'Amanda Volpatto',
        username: 'amandinha',
        description: 'socorro, tcc quer me matar',
        createdAt: '2022-08-14'
    }

    const topics = [
        {
            owner: {fullname: 'Pedro da Silva'},
            content: '  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, voluptatibus laborum praesentium accusamus nobis, perferendis quisquam aliquam ex non consequuntur distinctio fugit, ducimus est ab nam facilis molestias harum expedita.',
            coments: 1,
            reposts: 1,
            likes: 30, 
            creattedAt: '2023-08-01 19:23:00'
        },
        {
            owner: {fullname: 'Irineu Silva'},
            content: '  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, voluptatibus laborum praesentium accusamus nobis, perferendis quisquam aliquam ex non consequuntur distinctio fugit, ducimus est ab nam facilis molestias harum expedita.',
            coments: 56,
            reposts: 100,
            likes: 305, 
            creattedAt: '2023-08-03 19:23:00'
        },
        {
            owner: {fullname: 'Irineia'},
            content: '  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, voluptatibus laborum praesentium accusamus nobis, perferendis quisquam aliquam ex non consequuntur distinctio fugit, ducimus est ab nam facilis molestias harum expedita.',
            coments: 25,
            reposts: 20,
            likes: 100, 
            creattedAt: '2023-08-21 19:23:00'
        },
        {
            owner: {fullname: 'Gaspar'},
            content: '  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, voluptatibus laborum praesentium accusamus nobis, perferendis quisquam aliquam ex non consequuntur distinctio fugit, ducimus est ab nam facilis molestias harum expedita.',
            coments: 1,
            reposts: 1,
            likes: 1, 
            creattedAt: '2023-08-31 19:23:00'
        },
        {
            owner: {fullname: 'Cassiano'},
            content: '  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, voluptatibus laborum praesentium accusamus nobis, perferendis quisquam aliquam ex non consequuntur distinctio fugit, ducimus est ab nam facilis molestias harum expedita.',
            coments: 0,
            reposts: 0,
            likes: 0, 
            creattedAt: '2023-08-11 19:23:00'
        }
    
    ]

    return (
     <Box  id="topic-page" display="flex" flexDirection="column" alignItems="center" gap={3}>

        <HeaderProfile user={profile}/>

        <TopicList items={topics}/>


        </Box>
    )
}

export default TopicPage