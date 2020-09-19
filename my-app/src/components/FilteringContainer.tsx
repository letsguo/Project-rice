import React, {useEffect, useState} from 'react';
import './ClubContainer.css'


interface FilteringContainerProps {
    message: string;
}

const FilteringContainer: React.FC<FilteringContainerProps> = ({
 message
}) => {

    const [value, setValue] = useState("Search");

    useEffect(() => {
        console.log(value)
    }, [value]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setValue(event.currentTarget.value);
        message = value;
    };

    return (
        <div>
            <form className="form-inline d-flex justify-content-center md-form form-sm mt-0">
                <i className="fas fa-search" aria-hidden="true" />
                <input className="form-control form-control-sm ml-3 w-75" type="text" placeholder={value}
                       aria-label="Search" onChange={handleChange}/>
            </form>
        </div>
    );
};

export default FilteringContainer
