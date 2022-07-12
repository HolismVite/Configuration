import { Browse } from '@Form';
import ConfigItemIcon from '../ConfigType/Icon'

const headers = <>
    <th superAdmin>Key</th>
    <th>Name</th>
    <th>Type</th>
</>

const row = (item) => <>
    <td superAdmin>{item.key}</td>
    <td>{item.name}</td>
    <td>
        <ConfigItemIcon type={item.typeKey} />
    </td>
</>

const ConfigItemBrowser = () => {
    return <Browse
        column={'ConfigItemId'}
        entityType='ConfigItem'
        headers={headers}
        row={row}
        placeholder='Config item'
        show={(item) => item.name}
        choose={(item) => item.id}
        required='You should choose configuration item'
    />
}

export default ConfigItemBrowser