import { Document, Page, Text, View, StyleSheet, Link } from '@react-pdf/renderer';
const Willstyles = StyleSheet.create(
    {
        page: {
            padding: 40,
            flexDirection: "column",
            gap: 30,
        },
        u1: {
            flexDirection: "column",
            alignItems:"baseline",
            fontSize: 12,
            gap: 10,
        },
        u2: {
            flexDirection: "column",
            alignItems:"baseline",
            fontSize: 12,
            gap: 10,
        },
        u3: {
            flexDirection: "column",
            alignItems:"baseline",
            fontSize: 12,
            gap: 10,
        },
        v2: {
            flexDirection: "row",
            justifyContent: "flex-start",
            fontSize: 14,
        },
        v3: {
            flexDirection: "row",
            justifyContent: "space-between",
            fontSize: 10,
        },
        v4: {
            flexDirection: "row",
            justifyContent: "space-between",
            fontSize: 10,
        },
        v5: {
            flexDirection: "row",
            justifyContent: "flex-start",
            fontSize: 12,
        },
        v6: {
            flexDirection: "column",
            alignItems: "baseline",
            fontSize: 12,
        },
        v7: {
            flexDirection: "column",
           justifyContent:"flex-start",
            fontSize: 10,
        },

    }
)

const PDFDocumentWill = ({ data,blockId,trxnHash,documentId }) => (
    <Document>
        <Page size="A4" style={Willstyles.page}>
            <View style={Willstyles.u1}>
                <Text>Executor Name : {data.executorName} </Text>
                <Text>{`https://ipfs.io/ipfs/${data.executorDigitalSign}`}</Text>
                <Text>Aadhar No. : {data.executorIdProof}</Text>
            </View>
            <View style={Willstyles.u2}>
                <Text>Testator Name : {data.testatorName}</Text>
                <Text>{`https://ipfs.io/ipfs/${data.testatorDigitalSign}`}</Text>
                <Text>Aadhar No. : {data.newTestatorIdProof}</Text>
            </View>
            <View style={Willstyles.u3}>
                <Text>Witness Name : {data.witnessName}</Text>
                <Text>{`https://ipfs.io/ipfs/${data.witnessDigitalSign}`}</Text>
                <Text>Aadhar No. : {data.witnessIdProof}</Text>
            </View>

            <View style={Willstyles.v3}>
                <Text>Block Id: {blockId}</Text>
                <Text>Transaction Hash : {trxnHash}</Text>
            </View>
            <View style={Willstyles.v4}>
                <Text>Document Id : {documentId}</Text>
            </View>
            <View style={Willstyles.v7}>
                <Text>Document Links : </Text>
                <br></br>
                <Link>{`https://ipfs.io/ipfs/${data.willDocument}`}</Link>
            </View>
        </Page>
    </Document>
)

export default PDFDocumentWill;