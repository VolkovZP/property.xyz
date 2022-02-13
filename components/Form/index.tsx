import React, { useEffect, useRef, useState } from "react";
import FormItem from "./FormItem";
import CustomSelect, { IOptions } from "../CustomSelect";
import { MainBtn, StyledForm } from "../../styles/Form.styles";
import { useRouter } from "next/router";
import { DropDownAddress } from "../DropDown";
import { debounce } from 'throttle-debounce';
import { DebounceInput } from 'react-debounce-input';
const typeOptions = [
    {
        id: 1,
        label: "Flat",
        value: "flat",
    },
    {
        id: 2,
        label: "Detached",
        value: "detached",
    },
    {
        id: 3,
        label: "Semi-Detached",
        value: "semiDetached",
    },
    {
        id: 4,
        label: "Terrace",
        value: "terrace",
    },
];

const badsOptions = [
    {
        id: 1,
        label: "1",
        value: "1",
    },
    {
        id: 2,
        label: "2",
        value: "2",
    },
    {
        id: 3,
        label: "3",
        value: "3",
    },
];

interface IFormProps {
    btnName: 'Search' | 'Update'
}
const arr = ['152 Baker', '55 Chechatic', '32 st.Valiga', '55 Howgeg',]
const numberArr = ['152', '55', '32', '55'];




const Form = ({ btnName }: IFormProps) => {
    const router = useRouter()
    const [postcode, setPostcode] = useState<string>('');
    const [type, setType] = useState<null | IOptions>(null);
    const [beds, setBeds] = useState<null | IOptions>(null);
    const [withStreet, setWithStreet] = useState<any>(null)
    const [withoutStreet, setWithoutStreet] = useState<any>(null)
    const [valueInput, setValueInput] = useState('')
    const [isValid, setIsValid] = useState<boolean>(false)
    const [houseNumber, setHouseNumber] = useState<null | number>(null) //index
    const [n, setN] = useState<any>(null) //n house
    const [result, setResult] = useState({
        postcode: '',
        type: '',
        beds: '',
        houseNumber: '',
    })



    const handleSubmit = () => {
        console.log("SearchData: ", {
            postcode,
            type: type?.label,
            beds: beds?.label,
            houseNumber: n,
        });
        //  && withStreet?.includes(valueInput)
        if (postcode && type?.label && beds?.label && n) {
            console.log('send');
            setPostcode("");
            setType(null);
            setBeds(null);
            setN(null)
            setValueInput('')
            setWithStreet(null)
            setWithoutStreet(null)

        } else {
            console.log('reject');

        }
    };

    useEffect(() => {
        if (withoutStreet) {
            withoutStreet?.filter((item: any, index: number) => {
                if (index === houseNumber) setN(item)
            })

        }
    }, [houseNumber])


    const debounceFunc = debounce(2000, (e?: any) => {
        setValueInput(e?.target?.value)
    });



    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            handleSubmit()
        }}>
            <StyledForm>
                <FormItem label="Property postcode" divider >
                    {/* <DropDownAddress
                        setItemIndex={setHouseNumber}
                        valueInput={valueInput}
                        setValueInput={setValueInput}
                        postcode={postcode}
                        target={<input
                            // pattern="/[0-9a-zA-Z.+_]+@[-0-9a-zA-Z.+_]+\.[a-zA-Z]{2,4}/"
                            value={valueInput}
                            type="text"
                            placeholder="DC57PJ"
                            onChange={(e) => {
                                if (e.target.value === '55bbq') {
                                    setPostcode(e.target.value)
                                    setWithStreet(arr)
                                    setWithoutStreet(numberArr)
                                } else {
                                    setPostcode('')
                                    setWithStreet(null)
                                    setWithoutStreet(null)
                                }
                                setValueInput(e.target.value)
                                // debounceFunc(() => setValueInput(e?.target?.value))
                            }} />} items={withStreet} /> */}
                    <DropDownAddress
                        setItemIndex={setHouseNumber}
                        valueInput={valueInput}
                        setValueInput={setValueInput}
                        postcode={postcode}
                        target={
                            <DebounceInput
                                value={valueInput}
                                // pattern="/[0-9a-zA-Z.+_]+@[-0-9a-zA-Z.+_]+\.[a-zA-Z]{2,4}/"
                                debounceTimeout={400}
                                placeholder="DC57PJ"
                                onChange={(e) => {
                                    if (e.target.value === '55bbq') {
                                        setPostcode(e.target.value)
                                        setWithStreet(arr)
                                        setWithoutStreet(numberArr)
                                    } else {
                                        setPostcode('')
                                        setWithStreet(null)
                                        setWithoutStreet(null)
                                    }
                                    setValueInput(e.target.value)
                                }} />} items={withStreet} />
                </FormItem>
                <FormItem label="Property type" divider>
                    <CustomSelect
                        options={typeOptions}
                        selectedOption={type}
                        onSelectOption={setType}
                    />
                </FormItem>
                <FormItem label="No. of beds">
                    <CustomSelect
                        options={badsOptions}
                        selectedOption={beds}
                        onSelectOption={setBeds}
                    />
                </FormItem>
                <button type="submit">click</button>
            </StyledForm>
        </form>
    );
};

export default Form;
