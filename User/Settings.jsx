import {
    List,
    Text,
    BooleanProperty,
    Color
} from '@List';

const filters = <>
    <Text
        column='ConfigItemName'
        placeholder='Search'
    />
</>

const headers = <>
    <th>Setting</th>
    <th>Value</th>
</>

const value = (item) => {
    switch (item.typeKey) {
        case 'Text':
            break;
        case 'Integer':
            break;
        case 'PositiveInteger':
            break;
        case 'Decimal':
            break;
        case 'Boolean':
            return <BooleanProperty
                column='currentValue'
                value={item.currentValue || false}
                action={(value) => `/systemConfig/setValue?id=${item.id}&value=${value}`}
            />
        case 'NullableBoolean':
            break;
        case 'Color':
            return <Color
                column='currentValue'
                value={item.currentValue || "000"}
                action={(value) => `/systemConfig/setValue?id=${item.id}&value=${value}`}
            />
        case 'SingleChoice':
            break;
        case 'MultipleChoice':
            break;
        default:
            break;
    }
}

const row = (item) => {
    return <>
        <td>{item.configItemName}</td>
        <td>
            {
                value(item)
            }
        </td>
    </>
}

const Settings = () => {
    return <List
        title="Settings"
        entityType='userConfig'
        filters={filters}
        headers={headers}
        row={row}
    />
}

export default Settings;