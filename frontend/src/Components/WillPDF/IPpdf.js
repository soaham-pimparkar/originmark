import {Document, Page, Text, View, StyleSheet, Link } from '@react-pdf/renderer';
const IPstyles = StyleSheet.create(
    {
      page:{
        padding: 40,
        flexDirection:"column",
        gap:30,
      },
      v1: {
        flexDirection: "column",
        alignItems:"baseline",
        justifyContent:"flex-start",
        fontSize: 12,
        gap:10,
      },
      v2: {
        flexDirection: "row",
        justifyContent:"flex-start",
        fontSize: 14,
      },
      v3: {
        flexDirection: "row",
        justifyContent:"space-between",
        fontSize: 10,
      },
      v4: {
        flexDirection: "row",
        justifyContent:"space-between",
        fontSize: 10,
      },
      v5:{
        flexDirection: "row",
        justifyContent:"flex-start",
        fontSize: 12,
      },
      v6:{
        flexDirection: "column",
        alignItems:"baseline",
        fontSize: 12,
      },
      v7:{
        flexDirection: "column",
        alignItems:"baseline",
        gap:10,
        fontSize: 10,
      },

    }
  )

const PDFDocumentIP = ({data,blockId,trxnHash,documentId}) => (
    <Document>
      <Page size="A4" style={IPstyles.page}>
        <View style={IPstyles.v1}>
          <Text>Name : {data.ownerName}</Text>
          <Text >{`https://ipfs.io/ipfs/${data.ownerDigitalSign}`}</Text>
          <Text>Aadhar No. : {data.ownerProofIdentifier}</Text>
        </View>
        <View style={IPstyles.v2}>
          <Text>Title : {data.title}</Text>

        </View>
        <View style={IPstyles.v3}>
            <Text>Block Id: {blockId}</Text>
              <Text>Transaction Hash : {trxnHash}</Text>
        </View>
        <View style={IPstyles.v4}>
              <Text>Document Id : {documentId}</Text>
        </View>
        <View style={IPstyles.v5}>
          <Text>Type : IP</Text>
        </View>
        <View style={IPstyles.v6}>
          <Text>Description</Text>
          <Text>{data.description}</Text>
        </View>
        <View style={IPstyles.v7}>
        <Text >{`https://ipfs.io/ipfs/${data.proofs[0]}`}</Text>
        </View>
      </Page>
    </Document>
  )

  export default PDFDocumentIP;