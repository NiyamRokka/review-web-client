import React from 'react'
import { LuAsterisk } from 'react-icons/lu';
import Select, { type SingleValue } from 'react-select'

interface IOption { value: string, label: string }
interface IProps {
    id: string;
    label?: string;
    required?: boolean;
    options:IOption [],
    placeholder?:string
    [key:string]:any,
    
}

const SelectInput: React.FC<IProps> = ({ placeholder='Select an option',label = 'Select Input', required, id, options ,onChange,onBlur}) => {
    return (
        <div className=''>
            <div className="flex mb-1">
                <label htmlFor={id} className="text-lg font-normal  text-gray-900">
                    {label}
                </label>
                {required && <LuAsterisk className="text-red-400" />}
            </div>
            <Select
                onChange={(val:SingleValue<IOption>) =>{
                    onChange(val?.value)
                }}
                onBlur={onBlur}
                placeholder={placeholder}
                theme={(theme) => ({
                    ...theme,
                    borderRadius: 4,
                    colors: {
                        ...theme.colors,
                        primary25: '#a4f4cf',
                        primary: '#009966',
                    },
                })}

                styles={{
                    control: (baseStyles, state) => ({
                        ...baseStyles,
                        borderColor: state.isFocused ? '#a4f4cf ' : '#a4f4cf',
                        outline: state.isFocused ? '#009966 ' : '',
                        padding: '6px 0px'


                    }),
                }}

                options={options} />
        </div>
    )
}

export default SelectInput