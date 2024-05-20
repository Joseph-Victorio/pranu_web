import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DiagonalBtn from './DiagonalBtn';

import { Link } from 'react-router-dom';
import { useState } from 'react';


const TentangKamiSection = () => {
    const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  }
  return (
    <section className='font-rhodium p-5 sm:p-[75px]'>
        <p className='text-[30px] text-primary mb-5'>Tentang Kami</p>
        <div className='flex sm:flex-row flex-col gap-5'>
            {/* KIRI */}
            <div className='border-2 border-primary rounded-[20px] p-1 self-start font-rhodium'>
                <div className='relative mb-10'>
                <img 
                    src="/pranuFrame.png" 
                    alt=""
                    className='w-full' />
                   <Link
                    to='/tentang-kami'
                    className='absolute bottom-[-20px] left-[50%] translate-x-[-50%] '
                    >
                        <DiagonalBtn/>
                   </Link>
                </div>
                <div className="p-5">
                    <p className='text-justify text-tersier sm:text-[16px] text-[14px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus eum modi iste totam earum magni?</p>
                    <br />
                    <p className='text-justify text-tersier sm:text-[16px] text-[14px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus eum modi iste totam earum magni?</p>
                </div>
            </div>
            {/* KANAN */}
            <div className='border-2 border-primary rounded-[30px] p-4 '>
                <p className='text-[30px] text-center text-primary'>Pertanyaan Sering Diajukan</p>
                {/* ACCORDION */}
                <div >
                    {/* 1 */}
                    <Accordion 
                        defaultExpanded 
                        className='border-2 border-primary rounded-[30px] '
                        expanded={expanded === 'panel1'} 
                        onChange={handleChange('panel1')}>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                        >
                            <Typography >
                                <p className="font-rhodium text-primary">
                                    Bagaimana Cara Memesan?
                                </p>
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                <p className="font-rhodium text-justify">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                                </p>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    {/* 2 */}
                    <Accordion 
                    className='border-2 border-primary rounded-[30px] '
                    expanded={expanded === 'panel2'} 
                    onChange={handleChange('panel2')}>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                        >
                            <Typography >
                                <p className="font-rhodium text-primary">
                                   Apakah Harga Sudah Termasuk Harga Sewa?
                                </p>
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                <p className="font-rhodium text-justify">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                                </p>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    {/* 3 */}
                    <Accordion 
                        className='border-2 border-primary rounded-[30px] '
                        expanded={expanded === 'panel3'} 
                        onChange={handleChange('panel3')}>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                        >
                            <Typography >
                                <p className="font-rhodium text-primary">
                                    Berapa Lama Proses Order?
                                </p>
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                <p className="font-rhodium text-justify">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                                </p>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    {/* 4 */}
                    <Accordion 
                        className='border-2 border-primary rounded-[30px] '
                        expanded={expanded === 'panel4'} 
                        onChange={handleChange('panel4')}>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                        >
                            <Typography >
                                <p className="font-rhodium text-primary">
                                    Apakah Harga Sudah Termasuk Operator?
                                </p>
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                <p className="font-rhodium text-justify">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                                </p>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    
                </div>
                {/* <Link >
                    <p className="text-center">
                        Lihat Semua
                    </p>
                </Link> */}
            </div>
        </div>
    </section>
  )
}

export default TentangKamiSection