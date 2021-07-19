import React,{ useState,useEffect} from 'react';

const SvgComponent = () => {

    // return <svg id="eogxJy6wYXI1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 960 2100" shapeRendering="geometricPrecision" textRendering="geometricPrecision" width={960} height={2100}><path id="eogxJy6wYXI2" d="M32.740232,38.806758C447.104434,45.759668,1019.335432,248.460861,1080,559.926082C942.871480,960.070864,379.015311,1140.355364,0,1050C90.266764,1460.918637,621.302530,1787.973506,1080,1679.778247C833.376320,2052.519687,287.034291,2204.917229,0,1956.969377" transform="matrix(0.87078009842534 0 0 1.02068901019083 -3466.19802114968343 413.29894272876390)" fill="none" stroke="rgb(63,87,135)" strokeWidth="4.200000" /><path id="path" d="M22.634636,33.262936C647.544879,-28.319242,960,292.458545,960,587.645195C774.737265,778.776827,316.330790,1011.066437,0,1092.133052C5.779608,1590.287283,774.265809,1526.169307,960,1668.690602C965.127502,1832.964781,730.249769,2071.965929,183.405491,2100C83.391356,2089.264409,36.593759,2016.877899,0,1968.057022" fill="none" stroke="rgb(63,87,135)" strokeWidth="4.200000" /></svg>


    return (
        <div className="svg-container">
        {window.innerWidth<=540?<>
            <svg id="eNGgzVPcxCn1" width={540} height={2100} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 540 2100" shapeRendering="geometricPrecision" textRendering="geometricPrecision">
                <path id="path" d="M32.740232,38.806758C447.104434,45.759668,1019.335432,248.460861,1080,559.926082C942.871480,960.070864,379.015311,1140.355364,0,1050C90.266764,1460.918637,621.302530,1787.973506,1080,1679.778247C833.376320,2052.519687,287.034291,2204.917229,0,1956.969377" transform="matrix(0.49830710697458 0 0 1.01979356120169 0.91416223372488 -28.86520713177515)" fill="none" stroke="rgb(63,87,135)" strokeWidth="4.200000" /></svg>
        </>:<>
            {window.innerWidth<=640?<>
                <svg id="emCroweci3T1" width={640} height={2100} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 640 2100" shapeRendering="geometricPrecision" textRendering="geometricPrecision">
                    <path id="path" d="M32.740232,38.806758C447.104434,45.759668,1019.335432,248.460861,1080,559.926082C942.871480,960.070864,379.015311,1140.355364,0,1050C90.266764,1460.918637,621.302530,1787.973506,1080,1679.778247C833.376320,2052.519687,287.034291,2204.917229,0,1956.969377" transform="matrix(0.59751939637589 0 0 1.01432672141976 -2.66047404298257 -39.36273160787709)" fill="none" stroke="rgb(63,87,135)" strokeWidth="4.200000" /></svg>
            </>:<>
                {window.innerWidth<=720?<>
                    <svg xmlns="http://www.w3.org/2000/svg"width={720} height={2100} xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 720 2100" shapeRendering="geometricPrecision" textRendering="geometricPrecision"><path id="path" d="M32.740232,38.806758C447.104434,45.759668,1019.335432,248.460861,1080,559.926082C942.871480,960.070864,379.015311,1140.355364,0,1050C90.266764,1460.918637,621.302530,1787.973506,1080,1679.778247C833.376320,2052.519687,287.034291,2204.917229,0,1956.969377" transform="matrix(0.65252343627212 0 0 1.04905900450517 7.63734441305763 -40.71057891332566)" fill="none" stroke="rgb(63,87,135)" strokeWidth="4.200000" /></svg>
                </>:<>
                    {window.innerWidth<=800?<>
                        <svg id="eFPlBygaCqh1"  height={2100} width={800} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 880 2100" shapeRendering="geometricPrecision" textRendering="geometricPrecision"><path id="path" d="M32.740232,38.806758C447.104434,45.759668,1019.335432,248.460861,1080,559.926082C942.871480,960.070864,379.015311,1140.355364,0,1050C90.266764,1460.918637,621.302530,1787.973506,1080,1679.778247C833.376320,2052.519687,287.034291,2204.917229,0,1956.969377" transform="matrix(0.83304504457038 0 0 1.03045083134180 -9.84432406800386 -40.64618980027922)" fill="none" stroke="rgb(63,87,135)" strokeWidth="4.200000" /></svg>
                        </>:<>
                            {window.innerWidth<=960?<>
                                <svg id="eupUmePXxtK1" width={960} height={2100} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 960 2100" shapeRendering="geometricPrecision" textRendering="geometricPrecision"><path id="path" d="M32.740232,38.806758C447.104434,45.759668,1019.335432,248.460861,1080,559.926082C942.871480,960.070864,379.015311,1140.355364,0,1050C90.266764,1460.918637,621.302530,1787.973506,1080,1679.778247C833.376320,2052.519687,287.034291,2204.917229,0,1956.969377" transform="matrix(0.87078009842534 0 0 1.02068901019083 9.77874685031657 -30.20686527123598)" fill="none" stroke="rgb(63,87,135)" strokeWidth="4.200000" /></svg>
                            </>:<>
                                {window.innerWidth<=1000?<>
                                    <svg id="eab3oUFRZOJ1"width={1000} height={2100} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 1000 2100" shapeRendering="geometricPrecision" textRendering="geometricPrecision"><path id="path" d="M32.740232,38.806758C447.104434,45.759668,1019.335432,248.460861,1080,559.926082C942.871480,960.070864,379.015311,1140.355364,0,1050C90.266764,1460.918637,621.302530,1787.973506,1080,1679.778247C833.376320,2052.519687,287.034291,2204.917229,0,1956.969377" transform="matrix(0.92116391444967 0 0 1.02487080271924 -0.00000000282421 -34.67888833140091)" fill="none" stroke="rgb(63,87,135)" strokeWidth="4.200000" /></svg>
                                </>:<>
                                <svg id="eq01gdMBlzE1"width={1080} height={2100} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 1080 2100" shapeRendering="geometricPrecision" textRendering="geometricPrecision"><path id="path" d="M32.740232,38.806758C447.104434,45.759668,1019.335432,248.460861,1080,559.926082C942.871480,960.070864,379.015311,1140.355364,0,1050C90.266764,1460.918637,621.302530,1787.973506,1080,1679.778247C833.376320,2052.519687,287.034291,2204.917229,0,1956.969377" fill="none" stroke="rgb(63,87,135)" strokeWidth="4.200000" /></svg>
                                </>}
                            </>}
                        </>}
                    </>}
                </>}
            </>}
            </div>
            
            
       
    );
}

export default SvgComponent;
