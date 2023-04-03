import {styled, Typography} from "@mui/material";
import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import {useState} from "react";

const Root = styled('div')({
  marginTop: '30px',
  display: 'flex',
  flexDirection: 'row',
})

const Rectangle = styled('div')({
  width: '337px',
  border: '1px solid #E2702F',
  display: 'flex',
  color: 'white',
  boxSizing: 'border-box',
})

const TitleInRectangle = styled('div')({
  textTransform: 'uppercase',
  fontWeight: 'bold',
})

const Information = styled('div')({
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  alignItems: 'center',
  padding: '30px'
})

const DataName = styled('div')({
  color: '#787171',
  display: 'flex',
  marginTop: '10px',
  minWidth: '100%',
  justifyContent: 'space-between',
})

const ListOfComments = () => {
  const [value, setValue] = useState(4);
  return (
    <Box style={{display: 'flex', gap: '34px'}}
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      <Root>
        <Rectangle>
          <div>
            <Information>
              <TitleInRectangle>« Отличное место для отдыха и расслабления »</TitleInRectangle>
              <Rating name="read-only" value={value} size="small" readOnly />
              <div>В первый раз взяла массаж горячими камнями. Мне очень понравился:
                и общая атмосфера, и комфорт, и техника массажистки, все было круто!
                Очень советую этот массаж. Администрация всегда приветливая.
                Твёрдые пять баллов. Буду рекомендовать вас! Здесь действительно хорошо))
              </div>
              <DataName>
                <div>Верочка</div>
                <div>18 октября 2022</div>
              </DataName>
            </Information>
          </div>
        </Rectangle>
      </Root>
      <Root>
        <Rectangle>
          <div>
            <Information>
              <TitleInRectangle>« Отличное место для отдыха и расслабления »</TitleInRectangle>
              <Rating name="read-only" value={value} size="small" readOnly />
              <div>В первый раз взяла массаж горячими камнями. Мне очень понравился:
                и общая атмосфера, и комфорт, и техника массажистки, все было круто!
                Очень советую этот массаж. Администрация всегда приветливая.
                Твёрдые пять баллов. Буду рекомендовать вас! Здесь действительно хорошо))
              </div>
              <DataName>
                <div>Верочка</div>
                <div>18 октября 2022</div>
              </DataName>
            </Information>
          </div>
        </Rectangle>
      </Root>
      <Root>
        <Rectangle>
          <div>
            <Information>
              <TitleInRectangle>« Отличное место для отдыха и расслабления »</TitleInRectangle>
              <Rating name="read-only" value={value} size="small" readOnly />
              <div>В первый раз взяла массаж горячими камнями. Мне очень понравился:
                и общая атмосфера, и комфорт, и техника массажистки, все было круто!
                Очень советую этот массаж. Администрация всегда приветливая.
                Твёрдые пять баллов. Буду рекомендовать вас! Здесь действительно хорошо))
              </div>
              <DataName>
                <div>Верочка</div>
                <div>18 октября 2022</div>
              </DataName>
            </Information>
          </div>
        </Rectangle>
      </Root>
    </Box>
  );
}

export default ListOfComments;



