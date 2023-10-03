import '../../sass/components/scroll.scss'
import arrow from '../../assets/arrow.png';
import { useState } from 'react';

export default function Scroll({title, content}) {

    const [toggle, setToggle] = useState(false);

    return (
        <>
            <div className="scroll">
                <h3 className='scroll_title' onClick={() => setToggle(!toggle)} >
                    {title}
                    <img 
                        className={toggle ? 'arrow arrow_up' : 'arrow arrow_down'} 
                        src={arrow} 
                        alt="show content" 
                    />
                </h3>
                <div className={toggle ? 'scroll_content' : 'scroll_content_hidden'}>
                    {Array.isArray(content) ? content.map((item, index) => {
                        return (
                            <p key={index}>{item}</p>
                        )
                    }) : content
                    }
                </div>
            </div>
        </>
    )
}
