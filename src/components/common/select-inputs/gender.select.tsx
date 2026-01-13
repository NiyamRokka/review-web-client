import type React from "react"
import { Gender } from "../../../interface/enum.types"
import SelectInput from "../inputs/select.input"
import { Controller, type Control } from 'react-hook-form'

interface IProps {
    control:Control<any>
}



const GenderSelect:React.FC<IProps> = ({control}) => {
   
    const options = [
        {
            label: 'Male',
            value: Gender.MALE
        },
        {
            label: 'Female',
            value: Gender.FEMALE
        },
        {
            label: 'Not Prefer',
            value: Gender.NOT_PREFER
        },
        {
            label: 'Others',
            value: Gender.OTHERS
        }
    ]
    return (
        <div>
            <Controller
                control={control}
                name="gender"
                render={({ field: { onChange, onBlur, value, } }) => (
                    <SelectInput
                        onChange={onChange}
                        onBlur={onBlur} 
                        selected={value}
                        label="Gender"
                        id="gender"
                        options={options}
                    />
                )}


            />

        </div>
    )
}

export default GenderSelect