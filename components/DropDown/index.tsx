import React, { CSSProperties, ReactElement, useEffect, useMemo, useRef, useState } from 'react'
import { createPortal } from 'react-dom'


interface IDropMenuAddressProps {
    items: any
    target: any
    setItemIndex?: any
    setValueInput: any
    postcode: any
    valueInput: any
}

export const DropDownAddress: React.FC<IDropMenuAddressProps> = ({ items, target, setItemIndex, setValueInput, postcode, valueInput }) => {
    const targetRef = useRef<any>()
    const [coordinateX, setCoordinateX] = useState<any>()
    const [coordinateY, setCoordinateY] = useState<any>()
    const [refWidth, setWidt] = useState<any>(null)
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const getStyledDropDown = () => {
        if (targetRef.current && window) {
            const targetWidth = targetRef?.current?.offsetWidth;
            const targetPaddingLeft = targetRef.current?.offsetLeft;
            const coordinates = targetRef?.current?.children[0].getBoundingClientRect()
            setWidt(targetWidth + (targetPaddingLeft * 2));
            setCoordinateX(coordinates?.x)
            setCoordinateY(coordinates?.y + window.scrollY + coordinates?.height + 13)
            console.log(coordinates?.y);

        }
    }




    useEffect(() => {
        getStyledDropDown()

    }, [items])

    useEffect(() => {
        window.addEventListener('resize', getStyledDropDown, true)
        return () => {
            window.removeEventListener('resize', getStyledDropDown, true)
        }
    }, [targetRef.current])


    const style: CSSProperties = {
        top: coordinateY,
        left: coordinateX,
        width: refWidth,
        marginLeft: `-${targetRef.current?.offsetLeft}px`
    }


    useEffect(() => {
        if (items?.length) {
            setIsOpen(true)
        } else {
            setIsOpen(false)
        }
    }, [items?.length])



    useEffect(() => {
        if (isOpen) {
            window.addEventListener('click', (e) => {
                if (e.target !== targetRef.current.children[0]) {
                    setIsOpen(false)
                }
            })
        }
    }, [isOpen])


    return (
        <>
            {isOpen && createPortal(
                <div style={style} className='container'>
                    <div>
                        <nav >
                            <ul style={{ padding: 0, margin: 0, listStyle: 'none' }}>
                                {items?.map((item: any, index: any) =>
                                (<li onClick={
                                    () => {
                                        setItemIndex(index)
                                        setValueInput(item)
                                        setIsOpen(false)
                                    }
                                }
                                    style={{ padding: '10px 30px', fontSize: '18px', cursor: 'pointer' }}
                                    key={index.toString()}>{item}
                                </li>))}
                            </ul>
                        </nav>
                    </div>
                </div >
                , document.getElementById('portal') as HTMLElement)}
            <span onClick={() => {
                if (postcode === valueInput && valueInput !== '') {
                    setIsOpen(true)
                } else {
                    setIsOpen(false)
                }
            }} ref={targetRef as React.LegacyRef<HTMLDivElement>}>{target}</span>

        </>)
}


