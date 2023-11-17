import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography'
import Snorkeling from './../../assets/Snorkeling.png'
const images = [


  {
    url: 'https://s3-alpha-sig.figma.com/img/a2ab/026c/47e3621ae75f46343a87658c50a89e2a?Expires=1701043200&Signature=OYdh7ILpYvJy-vV3T1aFdBmW2hC~xmilWNEf9y-~Nu7v87VSo439SE0u-FRYxmTFyxCaEg58aRSr8ejn2-HCf9UJrOHvKeJcw4yrxH3NEcfM8BL756J5bGvAitmOL85gUzID75SlQIeJ-iqbJ5W1uI5~MK6gTxE12HkFPzgBFsCaqtqbAIvvDUqJTiWVXStvxX6l-2HhZ2J-H-iG5GBGR7Xp9AQAyqySoTg3N0yOvWpilOY~yFFAOi8QWbOGEy6-GlI53TjHlc3fqELbcT~zKezuEZOoMX36TtBm9Rz3nMX2NW84mBr~X18OZybMk1X93U6OoVgPQeh5qznlUtaFgA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    title: 'Snorkeling',
    width: '460px',

  },
  {
    url: 'https://s3-alpha-sig.figma.com/img/2c2c/3bba/c4d3fe70d68bd2b55c3af118b1ee3e98?Expires=1701043200&Signature=qeqfNxyJAZnWcOcQvTxwKx-4jkabBTPDWvPNxyKbkU1GubvQLGpZPHAA3zCobiWDuc0KO4IA7KNFVl~Wb2D0jxA25ododsAEj9YsGBchTyPzU9PcO27CQ7gCVzSgeQzjOzPn~XAH071djzLmyNifBZZ8yiPuc~Q328iF8XqoiefU9g2zYvp6iX8l06x2WF34WFmr1XrTXs~UseZ0ucrohBLFPdM1y0wXiCQ0uZeipaZRYDuwZDoBOugx7HUxxMPbv04KSdX5CwOLoMvUXDS0XKpHYgPUAZTjpSOKnn2ac~lhLX5C4E0clyVCAx~1TvLtXsflvyToN8dbkvtbkPnt9g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    title: 'Massage',
    width: '230.4px',


  },
  {
    url: 'https://s3-alpha-sig.figma.com/img/c351/7133/add1ae2b2119d90ae45a604568e9b10b?Expires=1701043200&Signature=EIdc0BUsJxJNvDAIVl4ZK0wfrQ1DIv7ce0AxtZuVJmy1fu40TPtTrYGjsdUh22CnnRhl1mfZe9L819UohfNBD7wYzdillENYdtl~hvkSh7XNK-nuWb0a2mOUkpBMwRCCs7lAYP5bLB~o6fk0hq2MkqpHblbz2uyviq8J8ZcWyqB~Mc~KeWHnRUGNEINfwE6DbFft-PAioiZ3EQXOT8-9kqaTE6kkjU636Bow1txXNXISnVj0SrLyNvT~R8pYHz9NQSh1Au~8v7eFDAAJwohh0Up4JXA4Oq9yxKvMEzV9H1yD7F8JUrYNDkXfsr21LaslkdzRJreIc4sKUsEwcWiaiw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    title: 'Hiking',
    width: '460.8px',


  },
  {
    url: 'https://s3-alpha-sig.figma.com/img/8418/1a50/4e3b05cf6002fd9b127f811a8a407432?Expires=1701043200&Signature=A9~GySL0iPonRl6cpkt9PUXRAtk~cXnAH1F3WeJSDql5ut43l0ktVquhU29j66lNt5sZCEMqLqPC1YjXUabRNOB~VzifRDRWgU~TuAnv8ZMz6uI1SpZLZx~207~BxaLrGQmT0ltspmxVEYZEIUYzsCunCjBcDNLNBxOtqw7~SuvUn317~3FGhpi6Onl3W~36majl2lgQBBcFnsPh1yiZWvV6gvnKUjxjtGjvXI2LejGnJk56lOo3STvgPeDdhUUl1lIhUHG1qvB~Tg71uURVVjknKti5GWkjJBUjvQDiiVLWfVX3kVhXw9Ko3XBxCIaExaKy7Fs1kAUyOWKh3YATLA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    title: 'Tour',
    width: '437.75px',


  },
  {
    url: 'https://s3-alpha-sig.figma.com/img/9854/82aa/34e6bbe1f5e03c80bc572627e56a142a?Expires=1701043200&Signature=oWFVGhG-CQSwQYwKO1G9SGzlDoYKGO6NmoflbAirk1YTkfTbq3cGFkiKU5eq4CQLw44SUJ~fqee5T7A~rG5xaZxmFm7eUQwYJs3lWZ70THAqSUjbvN2P5jC8UuWFJYabTUOZbt8N~DryB-ZXltKsPRjHBninho9DM7OC7FpzBqtBMCxmWVAMR~a4QjfJh~sc2nz2gZrk-ArQ5-jV96kw-LBXGZuqHpfqgst7yLXW7AQfNRYm9nWAJtqrOastgDdn2SW15hqNq1MpnTBRQAyOBYjsuCL8IhajmGkIqvZf3nJKSmkaJWOL3-DYrOtLRxmcyZwaaeO7p2d7sFPXQqsQfg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    title: 'Gastronomy',
    width: '437.75px',


  },
  {
    url: 'https://s3-alpha-sig.figma.com/img/39e6/ce68/84bcbbf52634816808270ba4ed8d389a?Expires=1701043200&Signature=S0ZIVY0UEBSvsdur6YscFIVfF8IC-pt0d3R1IXOmlOxtg0auWu0tv4JYmE~gsG8qOHFoZvOMMZwcn7YinhctOtzlkfSFGezGxFSjruBheMKQAjynEuGJyiXm6kZff1l98CIMGwOq6APrUNW7P0IjwLdblmFpylIPK8O5tZjVng-OXhw1i5prCyxQclhtR5zCxcyjNcfR15GJvvflaxp6QGzqvFU6iSHdtsMKAxnBHIl9U74~FVMF-deomvvY9p601fw18zH4oafNsA-pqX2JvvAemY1CtZg50mT-HbyY19rMYlIXt2yuGhraYkV64mHAQXvinqpOkdeh0KX78ROujQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    title: 'Shopping',
    width: '276.47px',


  },
  {
    url: 'https://s3-alpha-sig.figma.com/img/d886/680a/d9c74b7528897a001647d83aa3f14850?Expires=1701043200&Signature=KbcnIgld2o4OUSIrYgKVTh~CzFxCXnbyUyi2rosuK8rPexscYrGLpNcG37zOVIN42YKY5g4BdUSfx38Ce94gOYxqhEfRjaNhrwdZdj7TEe2aadjpAfOYdP1NkYqJqs64t3XFVIu6TJLHZSX5SpMbDOdPIblRH75zVj195Tr~~l0D1RiTen3Bp3hdpfpaj0POtOOnoDcjPRaAIujdwQut8s8RlkjTzSR-BLqPYprrNDp-mZrA7r1ZeHdWgGkOdagARRPa~LqJjWe69RZk~Dvkm1pXUBRWxI93lwiW0MlZVegMYR~-eZQ9UHa6SmuXYq~6wfYK9bsJhzFrF4fSVKwz7g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    title: 'Walking',
    width: '460.8px',


  },
  {
    url: 'https://s3-alpha-sig.figma.com/img/edbb/7dbf/8da70cbdac532dbc8b656fa27a95ccb2?Expires=1701043200&Signature=Cl2kCHkl~Z0zjXSVb30VEeX4iCII3UsamFMXQnO15aH0HE7REC9FwVDRlxlwysXWNkYjk0FoKyVC1~XhqWKv5NJT39~rLhsZN65JieEf0ja1lxCEnJlRDpBgbQl7qu10z1HNRZVncj8c9IbbSpOzckw4mYUk90GjD0ut-6EU3Q0MNFiGgJPOeie1RRMz2BAygErFswIgSf5vCNJ~lWP~NkBiDYeWALH~ZBTgQpAIovWjIT54fZWSfsZ55gwXpGyPPKN8GBMOluvprud-hjdotBmx4GM-O8Aep1FsGxb9MufZY-sX3GzUNj0NfV48IdJoMsK4gvvuM-TreCVUfp~TQg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    title: 'Fitness',

    width: '230.4px',

  },
  {
    url: 'https://s3-alpha-sig.figma.com/img/45b9/67c4/5f19bd735547248a87bdffdfac3600d1?Expires=1701043200&Signature=eP3StWJoGYJ4G6DiSIHCGmAM09if4BVSEd3Hd5dbhIN6SUpKnAf7gbJuE2khE0x78roeloB~bX1Yrs4hP7J9UnBZOTWHuvwiIceDv9nVFOpvxuxAuG~5PCII2SOehfyenPRjySkk2taS~~Skb79y8jnBEOMJPtiDGBoGs9-iBtLeNa0Lw~CoYM47iGr0zBoacPA-Y9m~EbuTAcHKTE--Xvdg9bodKtgywltdT08sSsoNulOndWWyFshO86EFJZIPUszY~f4n~xJd7sgo3ajfIuljdkIdfKLeecTxKs5h8KagLMExQA8SPKToMjhVYJjrfrlAIhGbI6txuZ-wmOV~zg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    title: 'Reading',
    width: '460.8px',


  }


];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  height: 360,
  [theme.breakpoints.down('sm')]: {
    width: '100% !important', // Overrides inline-style
    height: 100,
  },
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.15,
    },
    '& .MuiImageMarked-root': {
      opacity: 0,
    },
    '& .MuiTypography-root': {
      border: '4px solid currentColor',
    },
  },
}));

const ImageSrc = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center 40%',
});

const Image = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: 'absolute',
  bottom: -2,
  left: 'calc(50% - 9px)',
  transition: theme.transitions.create('opacity'),
}));

export default function ButtonBaseDemo() {
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%', justifyContent: "center" }}>
      {images.map((image) => (
        <ImageButton
          focusRipple
          key={image.title}
          style={{
            width: image.width,
          }}
        >
          <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
          <ImageBackdrop className="MuiImageBackdrop-root" />
          <Image>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              sx={{
                position: 'relative',
                p: 4,
                pt: 2,
                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
              }}
            >
              {image.title}
              <ImageMarked className="MuiImageMarked-root" />
            </Typography>
          </Image>
        </ImageButton>
      ))
      }
    </Box >
  );
}
