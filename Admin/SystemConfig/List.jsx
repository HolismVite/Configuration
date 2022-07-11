import {
    List,
    Text,
    BooleanProperty,
    Color,
} from '@List';
import UpsertSystemConfig from './Upsert';
import ConfigType from '../ConfigType/Filter';
import ConfigTypeIcon from '../ConfigType/Icon';

const filters = <>
    <Text
        column='ConfigItemName'
        placeholder='Config name'
    />
    <ConfigType />
</>

const headers = <>
    <th>Name</th>
    <th>Type</th>
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
            break;
        case 'NullableBoolean':
            break;
        case 'Color':
            return <Color
                column='currentValue'
                value={item.currentValue || "000"}
                action={(value) => `/systemConfig/setValue?id=${item.id}&value=${value}`}
            />
            break;
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
            <ConfigTypeIcon type={item.typeKey} />
        </td>
        <td>
            {
                value(item)
            }
        </td>
    </>
}

const SystemConfigs = ({ isSuperAdmin }) => {
    return <List
        title="System Configs"
        entityType='systemConfig'
        filters={filters}
        headers={headers}
        row={row}
        create={isSuperAdmin && UpsertSystemConfig}
        hasDelete={isSuperAdmin}
        hasEdit={true}
    />
}

export default SystemConfigs;
export { SystemConfigs }