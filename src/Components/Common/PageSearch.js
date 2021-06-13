import React, { useEffect} from 'react'
import Select from 'react-select';
import { makeStyles } from '@material-ui/core/styles';
import { config } from '../../data/NavMenuListConfig';

const optionList = [];
const getItemFromMenuConfig = (MenuConfig) => {
    MenuConfig.forEach(item => {
        if (item.children !== undefined && item.children.length !== 0) {
            getItemFromMenuConfig(item.children);
        }
        if (item.path !== undefined)
            optionList.push({ value: item.path, label: item.name });
    });
    //return optionList;
}
function PageSearch({ seacrchBoxProps }) {
    useEffect(() => {
        if (optionList.length === 0)
            getItemFromMenuConfig(config.menuItems);
    }, []);
    return (
        <div>
            <Select
                name="form-field-name"
                options={optionList}
                onChange={seacrchBoxProps.onChangeSearchBox}
                className="pageSearchCss"
                placeholder={'Search Topic'}
                value={seacrchBoxProps.searchBoxSeletedItem}
                padding={'20px'}
            />
        </div>
    )
}

export default PageSearch
