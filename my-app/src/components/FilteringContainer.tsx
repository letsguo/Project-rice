import React from 'react';
import './ClubContainer.css'
import {useRecoilState, useRecoilValue} from "recoil";
import {searchState} from "../recoil/atom";
import {searchSelector} from "../recoil/selectors";


interface FilteringContainerProps {
    message: string;
}

const FilteringContainer: React.FC<FilteringContainerProps> = ({
 message
}) => {

    const [searchQuery, setSearchQuery] = useRecoilState(searchState);
    let value = useRecoilValue(searchSelector);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setSearchQuery(event.currentTarget.value);
        message = value;
    };

    return (
        <div>
            <form className="form-inline d-flex justify-content-center md-form form-sm mt-0">
                <i className="fas fa-search" aria-hidden="true" />
                <input className="form-control form-control-sm ml-3 w-75" type="text" placeholder={searchQuery}
                       aria-label="Search" onChange={handleChange}/>
            </form>
        </div>
    );
};

export default FilteringContainer
