import useConfig from "../Hooks/useConfig"

const ConfigProperty = ({ type }) => {

    const { getProperty } = useConfig()
    const property = getProperty(type)

    return property

}

export default ConfigProperty