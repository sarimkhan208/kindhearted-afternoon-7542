import { Alert , AlertIcon , AlertDescription , AlertTitle } from "@chakra-ui/react"


export default function WrongAlert(status){
    return (
        status && <Alert status='error'>
            <AlertIcon />
            <AlertTitle>Your browser is outdated!</AlertTitle>
            <AlertDescription>Your Chakra experience may be degraded.</AlertDescription>
        </Alert>
    )
}