import { DialogForm } from '@Form'

const ManageEntityConfigs = ({
    entityGuid
}) => {

    const inputs = <>
        <Text
            column='Text'
            placeholder='Text'
        />
    </>
    
    return <DialogForm
        title='Entity Configs'
        inputs={inputs}
    />
}

export default ManageEntityConfigs