import type { NextPage } from "next"
import GET_ACTIVE_ITEMS from "../constants/subgraphQueries"
import { useQuery } from "@apollo/client"

const GraphExample: NextPage = () => {
    const { loading, error: subgraphQueryError, data } = useQuery(GET_ACTIVE_ITEMS)
    // console.log("Data: ")
    return <div>Data: {JSON.stringify(data, null, 2)}</div>
}
export default GraphExample
