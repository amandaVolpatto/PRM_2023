import {Avatar, Box, Typography} from "@mui/material";
import { CalendarMonthOutlined } from "@mui/icons-material";

//import de imagem
import banner from '../../assets/img/profile_banner.png';
import avatar from '../../assets/img/profile_avatar.jpg';

//import do estilo
import './style.css'


function HeaderProfile(){
    return(
        <Box  id= "header-profile">

            <Box className="header-profile-background">
                <img src={banner} />

            </Box>
            <Box className="header-profile-detail">

                <Avatar alt="Fulano de tal" style={{width: 128, height: 128}}
                    src={avatar} className="header-profile-detail-avatar"/>

                <Box className="header-profile-detail-text">
                    
                    <Typography variant="h5">
                        Irineia
                    </Typography>
                    <Typography variant="subtitle1" component="h6">
                        @Ireneiavcnsabe
                    </Typography>
                    <Typography variant="subtitle1" component="p">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore molestiae odio minus 
                        quidem accusantium ullam eos expedita aliquam iste dolorum a, dolor nulla nesciunt 
                        quo excepturi tempore saepe deserunt! Fugiat!
                    </Typography>
                    <Typography variant="caption"> 
                        <CalendarMonthOutlined/>
                        Entrou em agosto de 2023
                    </Typography>
                </Box>

            </Box>

        </Box>
    )
}
export default HeaderProfile;