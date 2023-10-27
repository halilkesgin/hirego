import Container from "@/components/container"
import Heading from "@/components/heading"
import { JobsColumn, columns } from "./(_components)/(all-jobs)/_components/columns"
import { CategoriesClient } from "./(_components)/(all-jobs)/_components/client"
import {job} from "@/data/job"
import AllJobsList from "./(_components)/(all-jobs)/_components/list"

const JobsPage = ({
    data
}: {
    data: JobsColumn[]
}) => {

    return (
        <Container className="space-y-8">
            <Heading 
                title="Jobs"
                subtitle="This is our job subtitle content"
            />
            {/* <CategoriesClient data={[job]} /> */}
            <AllJobsList />
        </Container>
    )
}

export default JobsPage