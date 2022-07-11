import { Browse as BrowseInput } from '@Form';
import { Browse } from '@Browse';
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

const BrowserDialog = () => {
    return <Browse
        entityType='ConfigItem'
        headers={headers}
        row={row}
    />
}

const ConfigItemBrowser = () => {
    return <BrowseInput
        column={'ConfigItemId'}
        browser={BrowserDialog}
        placeholder='Config item'
        display={(item) => item.name}
        choose={(item) => item.id}
        required='You should choose configuration item'
    />
}

export default ConfigItemBrowser