import { Browse } from '@Form';
import { Text } from '@List'
import ConfigType from '../ConfigType/Filter'
import ConfigItemIcon from '../ConfigType/Icon'

const filters = <>
    <Text
        column="Key"
    />
    <Text
        column="Name"
    />
    <ConfigType />
</>

const headers = <>
    <th superAdmin>Key</th>
    <th>Name</th>
    <th>Type</th>
</>

const row = (item) => <>
    <td superAdmin>{item.key}</td>
    <td>{item.name}</td>
    <td>
        <ConfigItemIcon type={item.configTypeId} />
    </td>
</>

const ConfigItemField = () => {
    return <Browse
        column={'ConfigItemId'}
        entityType='ConfigItem'
        filters={filters}
        headers={headers}
        row={row}
        placeholder='Config item'
        show={(item) => item.name}
        choose={(item) => item.id}
        required='You should choose configuration item'
    />
}

export default ConfigItemField