// . \ + * ? [ ^ ] $ ( ) { } = ! < > | : -

Prism.languages.plsql = Prism.languages.extend('sql', {
	'comment': [
		/\/\*[\s\S]*?\*\//,
		/--.*/
	],

	'label': /\<\<\/s?[a-zA-Z0-9]+\/s?\>\>/
});

Prism.languages.plsql['keyword'] = [
	/\bCURRENT_TRANSFORM_GROUP_FOR_TYPE/i,
	/\bCURRENT_DEFAULT_TRANSFORM_GROUP/i,
	/\bDATETIME_INTERVAL_PRECISION/i,
	/\bPARAMETER_SPECIFIC_CATALOG/i,
	/\bPARAMETER_ORDINAL_POSITION/i,
	/\bUSER_DEFINED_TYPE_CATALOG/i,
	/\bPARAMETER_SPECIFIC_SCHEMA/i,
	/\bTRANSACTIONS_ROLLED_BACK/i,
	/\bUSER_DEFINED_TYPE_SCHEMA/i,
	/\bPARAMETER_SPECIFIC_NAME/i,
	/\bDATETIME_INTERVAL_CODE/i,
	/\bTRANSACTIONS_COMMITTED/i,
	/\bUSER_DEFINED_TYPE_CODE/i,
	/\bUSER_DEFINED_TYPE_NAME/i,
	/\bDYNAMIC_FUNCTION_CODE/i,
	/\bARRAY_MAX_CARDINALITY/i,
	/\bCHARACTER_SET_CATALOG/i,
	/\bCOMMAND_FUNCTION_CODE/i,
	/\bRETURNED_OCTET_LENGTH/i,
	/\bRETURNED_CARDINALITY/i,
	/\bCHARACTER_SET_SCHEMA/i,
	/\bMESSAGE_OCTET_LENGTH/i,
	/\bCHARACTER_SET_NAME/i,
	/\bDLURLCOMPLETEWRITE/i,
	/\bTRANSACTION_ACTIVE/i,
	/\bCONSTRAINT_CATALOG/i,
	/\bCONSTRAINT_SCHEMA/i,
	/\bOCCURRENCES_REGEX/i,
	/\bCOLLATION_CATALOG/i,
	/\bDLURLCOMPLETEONLY/i,
	/\bCURRENT_TIMESTAMP/i,
	/\bRETURNED_SQLSTATE/i,
	/\bCHARACTER_LENGTH/i,
	/\bCOLLATION_SCHEMA/i,
	/\bCONDITION_NUMBER/i,
	/\bCOMMAND_FUNCTION/i,
	/\bDYNAMIC_FUNCTION/i,
	/\bPERCENTILE_DISC/i,
	/\bPERCENTILE_CONT/i,
	/\bSUBCLASS_ORIGIN/i,
	/\bMAX_CARDINALITY/i,
	/\bCONSTRAINT_NAME/i,
	/\bSUBSTRING_REGEX/i,
	/\bTRIGGER_CATALOG/i,
	/\bCHARACTERISTICS/i,
	/\bCONNECTION_NAME/i,
	/\bTRANSLATE_REGEX/i,
	/\bCURRENT_CATALOG/i,
	/\bTIMEZONE_MINUTE/i,
	/\bBEGIN_PARTITION/i,
	/\bRETURNED_LENGTH/i,
	/\bROUTINE_CATALOG/i,
	/\bTOP_LEVEL_COUNT/i,
	/\bREGR_INTERCEPT/i,
	/\bCURRENT_SCHEMA/i,
	/\bLOCALTIMESTAMP/i,
	/\bPOSITION_REGEX/i,
	/\bXMLDECLARATION/i,
	/\bMESSAGE_LENGTH/i,
	/\bPARAMETER_MODE/i,
	/\bPARAMETER_NAME/i,
	/\bDLURLPATHWRITE/i,
	/\bROUTINE_SCHEMA/i,
	/\bTRIGGER_SCHEMA/i,
	/\bIMPLEMENTATION/i,
	/\bCOLLATION_NAME/i,
	/\bDLPREVIOUSCOPY/i,
	/\bCONFIGURATION/i,
	/\bXMLNAMESPACES/i,
	/\bAUTHORIZATION/i,
	/\bCORRESPONDING/i,
	/\bDLURLPATHONLY/i,
	/\bSPECIFIC_NAME/i,
	/\bSCOPE_CATALOG/i,
	/\bDLURLCOMPLETE/i,
	/\bDETERMINISTIC/i,
	/\bEND_PARTITION/i,
	/\bXMLATTRIBUTES/i,
	/\bTIMEZONE_HOUR/i,
	/\bCURRENT_TIME/i,
	/\bINSTANTIABLE/i,
	/\bSUBSCRIPTION/i,
	/\bCURRENT_USER/i,
	/\bMATERIALIZED/i,
	/\bXMLSERIALIZE/i,
	/\bSERIALIZABLE/i,
	/\bOCTET_LENGTH/i,
	/\bSESSION_USER/i,
	/\bCONCURRENTLY/i,
	/\bCLASS_ORIGIN/i,
	/\bWIDTH_BUCKET/i,
	/\bTRIGGER_NAME/i,
	/\bROUTINE_NAME/i,
	/\bSPECIFICTYPE/i,
	/\bPERCENT_RANK/i,
	/\bSCOPE_SCHEMA/i,
	/\bSQLEXCEPTION/i,
	/\bCURRENT_DATE/i,
	/\bINTERSECTION/i,
	/\bCURRENT_PATH/i,
	/\bCURRENT_ROLE/i,
	/\bCATALOG_NAME/i,
	/\bMESSAGE_TEXT/i,
	/\bREFERENCING/i,
	/\bDIAGNOSTICS/i,
	/\bBEGIN_FRAME/i,
	/\bINSENSITIVE/i,
	/\bSCHEMA_NAME/i,
	/\bPASSTHROUGH/i,
	/\bTRANSACTION/i,
	/\bXMLVALIDATE/i,
	/\bCARDINALITY/i,
	/\bIMMEDIATELY/i,
	/\bDLURLSCHEME/i,
	/\bDLURLSERVER/i,
	/\bCHAR_LENGTH/i,
	/\bSERVER_NAME/i,
	/\bCURSOR_NAME/i,
	/\bCURRENT_ROW/i,
	/\bTRANSLATION/i,
	/\bUNENCRYPTED/i,
	/\bUNCOMMITTED/i,
	/\bCOLUMN_NAME/i,
	/\bXMLDOCUMENT/i,
	/\bPUBLICATION/i,
	/\bFIRST_VALUE/i,
	/\bTABLESAMPLE/i,
	/\bSYSTEM_USER/i,
	/\bSYSTEM_TIME/i,
	/\bSTDDEV_SAMP/i,
	/\bCONSTRAINTS/i,
	/\bSUBMULTISET/i,
	/\bCONSTRUCTOR/i,
	/\bREPEATABLE/i,
	/\bREFERENCES/i,
	/\bCONVERSION/i,
	/\bSTDDEV_POP/i,
	/\bTRIM_ARRAY/i,
	/\bSTATISTICS/i,
	/\bSTANDALONE/i,
	/\bSQLWARNING/i,
	/\bDICTIONARY/i,
	/\bCONSTRAINT/i,
	/\bCONNECTION/i,
	/\bXMLCOMMENT/i,
	/\bREGR_COUNT/i,
	/\bPERMISSION/i,
	/\bREGR_SLOPE/i,
	/\bORDINALITY/i,
	/\bTABLESPACE/i,
	/\bTABLE_NAME/i,
	/\bCOVAR_SAMP/i,
	/\bNORMALIZED/i,
	/\bCHECKPOINT/i,
	/\bTRANSFORMS/i,
	/\bXMLELEMENT/i,
	/\bEXPRESSION/i,
	/\bDEFERRABLE/i,
	/\bCHARACTERS/i,
	/\bOVERRIDING/i,
	/\bDELIMITERS/i,
	/\bDENSE_RANK/i,
	/\bSCOPE_NAME/i,
	/\bPRIVILEGES/i,
	/\bDESCRIPTOR/i,
	/\bPROCEDURAL/i,
	/\bBIT_LENGTH/i,
	/\bDISCONNECT/i,
	/\bATTRIBUTES/i,
	/\bROW_NUMBER/i,
	/\bXMLITERATE/i,
	/\bASYMMETRIC/i,
	/\bKEY_MEMBER/i,
	/\bLIKE_REGEX/i,
	/\bASSIGNMENT/i,
	/\bASENSITIVE/i,
	/\bVERSIONING/i,
	/\bLAST_VALUE/i,
	/\bWHITESPACE/i,
	/\bDEALLOCATE/i,
	/\bATTRIBUTE/i,
	/\bSTATEMENT/i,
	/\bBERNOULLI/i,
	/\bFOLLOWING/i,
	/\bVARBINARY/i,
	/\bPRECISION/i,
	/\bFRAME_ROW/i,
	/\bPARAMETER/i,
	/\bREGR_AVGX/i,
	/\bXMLSCHEMA/i,
	/\bAGGREGATE/i,
	/\bREGR_AVGY/i,
	/\bFUNCTIONS/i,
	/\bDELIMITER/i,
	/\bGENERATED/i,
	/\bXMLCONCAT/i,
	/\bTIMESTAMP/i,
	/\bVALIDATOR/i,
	/\bCOMMITTED/i,
	/\bTEMPORARY/i,
	/\bNORMALIZE/i,
	/\bASSERTION/i,
	/\bCONDITION/i,
	/\bHIERARCHY/i,
	/\bNTH_VALUE/i,
	/\bSEQUENCES/i,
	/\bENCRYPTED/i,
	/\bCHARACTER/i,
	/\bEND_FRAME/i,
	/\bSENSITIVE/i,
	/\bSELECTIVE/i,
	/\bIMMEDIATE/i,
	/\bTRANSLATE/i,
	/\bIMMUTABLE/i,
	/\bRECURSIVE/i,
	/\bREQUIRING/i,
	/\bUNBOUNDED/i,
	/\bXMLBINARY/i,
	/\bINCLUDING/i,
	/\bINCREMENT/i,
	/\bPARTITION/i,
	/\bINDICATOR/i,
	/\bLOCALTIME/i,
	/\bINITIALLY/i,
	/\bTRANSFORM/i,
	/\bSYMMETRIC/i,
	/\bNAMESPACE/i,
	/\bEXCEPTION/i,
	/\bSAVEPOINT/i,
	/\bXMLEXISTS/i,
	/\bEXCLUDING/i,
	/\bINTEGRITY/i,
	/\bINTERSECT/i,
	/\bEXCLUSIVE/i,
	/\bCOVAR_POP/i,
	/\bSUBSTRING/i,
	/\bCOLLATION/i,
	/\bROW_COUNT/i,
	/\bISOLATION/i,
	/\bEXTENSION/i,
	/\bXMLFOREST/i,
	/\bPROCEDURE/i,
	/\bDLNEWCOPY/i,
	/\bARRAY_AGG/i,
	/\bACCORDING/i,
	/\bSTRUCTURE/i,
	/\bCUME_DIST/i,
	/\bPRECEDING/i,
	/\bLEAKPROOF/i,
	/\bRETURNING/i,
	/\bDLURLPATH/i,
	/\bTEMPLATE/i,
	/\bROLLBACK/i,
	/\bKEY_TYPE/i,
	/\bINTERVAL/i,
	/\bRESTRICT/i,
	/\bINSTANCE/i,
	/\bINHERITS/i,
	/\bSECURITY/i,
	/\bLOCATION/i,
	/\bIMPLICIT/i,
	/\bXMLPARSE/i,
	/\bIDENTITY/i,
	/\bRELATIVE/i,
	/\bSEQUENCE/i,
	/\bMAXVALUE/i,
	/\bGROUPING/i,
	/\bREGR_SYY/i,
	/\bGREATEST/i,
	/\bSMALLINT/i,
	/\bREGR_SXY/i,
	/\bREGR_SXX/i,
	/\bSNAPSHOT/i,
	/\bMINVALUE/i,
	/\bMODIFIES/i,
	/\bXMLQUERY/i,
	/\bSPECIFIC/i,
	/\bFUNCTION/i,
	/\bSQLERROR/i,
	/\bMULTISET/i,
	/\bSQLSTATE/i,
	/\bEXTERNAL/i,
	/\bABSOLUTE/i,
	/\bNATIONAL/i,
	/\bENFORCED/i,
	/\bRECOVERY/i,
	/\bREASSIGN/i,
	/\bEND-EXEC/i,
	/\bENCODING/i,
	/\bLANGUAGE/i,
	/\bDOCUMENT/i,
	/\bDISTINCT/i,
	/\bDISPATCH/i,
	/\bDESCRIBE/i,
	/\bTRAILING/i,
	/\bNULLABLE/i,
	/\bPRESERVE/i,
	/\bPREPARED/i,
	/\bDEFERRED/i,
	/\bDEFAULTS/i,
	/\bXMLTABLE/i,
	/\bDATALINK/i,
	/\bDATABASE/i,
	/\bPRECEDES/i,
	/\bCONTINUE/i,
	/\bCONTAINS/i,
	/\bPOSITION/i,
	/\bOPERATOR/i,
	/\bCONFLICT/i,
	/\bTRUNCATE/i,
	/\bORDERING/i,
	/\bCOMMENTS/i,
	/\bCOALESCE/i,
	/\bUNLISTEN/i,
	/\bUNLOGGED/i,
	/\bOVERLAPS/i,
	/\bCASCADED/i,
	/\bPASSWORD/i,
	/\bVALIDATE/i,
	/\bPARALLEL/i,
	/\bVALUE_OF/i,
	/\bVARIADIC/i,
	/\bBACKWARD/i,
	/\bVAR_SAMP/i,
	/\bVOLATILE/i,
	/\bWHENEVER/i,
	/\bALLOCATE/i,
	/\bSUCCEEDS/i,
	/\bDEFINED/i,
	/\bRESTORE/i,
	/\bGRANTED/i,
	/\bRESTART/i,
	/\bRESPECT/i,
	/\bDEFINER/i,
	/\bSIMILAR/i,
	/\bTRUSTED/i,
	/\bLOCATOR/i,
	/\bCOLUMNS/i,
	/\bREPLICA/i,
	/\bREPLACE/i,
	/\bHANDLER/i,
	/\bSESSION/i,
	/\bMAPPING/i,
	/\bRELEASE/i,
	/\bANALYSE/i,
	/\bANALYZE/i,
	/\bTRIGGER/i,
	/\bDEPENDS/i,
	/\bREINDEX/i,
	/\bBLOCKED/i,
	/\bCOMMENT/i,
	/\bDERIVED/i,
	/\bBOOLEAN/i,
	/\bCURRENT/i,
	/\bVARYING/i,
	/\bEXCLUDE/i,
	/\bREGR_R2/i,
	/\bBREADTH/i,
	/\bVERSION/i,
	/\bXMLTEXT/i,
	/\bEXECUTE/i,
	/\bVARCHAR/i,
	/\bEXPLAIN/i,
	/\bREFRESH/i,
	/\bDISABLE/i,
	/\bSECTION/i,
	/\bDISCARD/i,
	/\bINDEXES/i,
	/\bNATURAL/i,
	/\bVERBOSE/i,
	/\bINHERIT/i,
	/\bNESTING/i,
	/\bRECHECK/i,
	/\bEXTRACT/i,
	/\bUNKNOWN/i,
	/\bCONNECT/i,
	/\bPROGRAM/i,
	/\bMATCHED/i,
	/\bVAR_POP/i,
	/\bNOTHING/i,
	/\bSCHEMAS/i,
	/\bNOTNULL/i,
	/\bSTORAGE/i,
	/\bCASCADE/i,
	/\bBETWEEN/i,
	/\bPRIMARY/i,
	/\bWITHOUT/i,
	/\bINSTEAD/i,
	/\bINTEGER/i,
	/\bPREPARE/i,
	/\bNUMERIC/i,
	/\bCLUSTER/i,
	/\bUNTYPED/i,
	/\bUESCAPE/i,
	/\bCOLLATE/i,
	/\bCONTENT/i,
	/\bINVOKER/i,
	/\bFOREIGN/i,
	/\bFORTRAN/i,
	/\bFORWARD/i,
	/\bPORTION/i,
	/\bDLVALUE/i,
	/\bPLACING/i,
	/\bOPTIONS/i,
	/\bCATALOG/i,
	/\bCONTROL/i,
	/\bWRAPPER/i,
	/\bSQLCODE/i,
	/\bCONVERT/i,
	/\bDECIMAL/i,
	/\bROUTINE/i,
	/\bPERCENT/i,
	/\bDYNAMIC/i,
	/\bOVERLAY/i,
	/\bLATERAL/i,
	/\bDECLARE/i,
	/\bLEADING/i,
	/\bXMLCAST/i,
	/\bDEFAULT/i,
	/\bRETURNS/i,
	/\bXMLROOT/i,
	/\bGENERAL/i,
	/\bUNNAMED/i,
	/\bLIBRARY/i,
	/\bELEMENT/i,
	/\bCEILING/i,
	/\bPASSING/i,
	/\bPARTIAL/i,
	/\bCOLLECT/i,
	/\bPASCAL/i,
	/\bXMLAGG/i,
	/\bACCESS/i,
	/\bACTION/i,
	/\bWITHIN/i,
	/\bWINDOW/i,
	/\bOUTPUT/i,
	/\bALWAYS/i,
	/\bOTHERS/i,
	/\bPERIOD/i,
	/\bATOMIC/i,
	/\bOPTION/i,
	/\bATTACH/i,
	/\bPOLICY/i,
	/\bBASE64/i,
	/\bBEFORE/i,
	/\bBIGINT/i,
	/\bBINARY/i,
	/\bOFFSET/i,
	/\bOCTETS/i,
	/\bOBJECT/i,
	/\bNUMBER/i,
	/\bVALUES/i,
	/\bNULLIF/i,
	/\bVACUUM/i,
	/\bCALLED/i,
	/\bUPDATE/i,
	/\bNOWAIT/i,
	/\bNOTIFY/i,
	/\bUNNEST/i,
	/\bPUBLIC/i,
	/\bUNLINK/i,
	/\bUNIQUE/i,
	/\bCOLUMN/i,
	/\bCOMMIT/i,
	/\bCREATE/i,
	/\bCURSOR/i,
	/\bDEGREE/i,
	/\bDELETE/i,
	/\bDETACH/i,
	/\bDOMAIN/i,
	/\bDOUBLE/i,
	/\bENABLE/i,
	/\bTABLES/i,
	/\bEQUALS/i,
	/\bESCAPE/i,
	/\bSYSTEM/i,
	/\bEXCEPT/i,
	/\bMODULE/i,
	/\bEXISTS/i,
	/\bMINUTE/i,
	/\bMETHOD/i,
	/\bFAMILY/i,
	/\bSTRICT/i,
	/\bMEMBER/i,
	/\bABSENT/i,
	/\bFILTER/i,
	/\bRENAME/i,
	/\bSTDOUT/i,
	/\bLOGGED/i,
	/\bLOCKED/i,
	/\bSTATIC/i,
	/\bSTABLE/i,
	/\bFREEZE/i,
	/\bPARSER/i,
	/\bLISTEN/i,
	/\bFUSION/i,
	/\bRESULT/i,
	/\bRETURN/i,
	/\bGLOBAL/i,
	/\bSOURCE/i,
	/\bSIMPLE/i,
	/\bLENGTH/i,
	/\bGROUPS/i,
	/\bHAVING/i,
	/\bREVOKE/i,
	/\bHEADER/i,
	/\bSERVER/i,
	/\bIGNORE/i,
	/\bROLLUP/i,
	/\bSELECT/i,
	/\bIMPORT/i,
	/\bINDENT/i,
	/\bSECOND/i,
	/\bSEARCH/i,
	/\bISNULL/i,
	/\bSCROLL/i,
	/\bINLINE/i,
	/\bINSERT/i,
	/\bSCHEMA/i,
	/\bINPUT/i,
	/\bSCALE/i,
	/\bSCOPE/i,
	/\bINNER/i,
	/\bINDEX/i,
	/\bLABEL/i,
	/\bLARGE/i,
	/\bILIKE/i,
	/\bXMLPI/i,
	/\bRIGHT/i,
	/\bLEAST/i,
	/\bSETOF/i,
	/\bSHARE/i,
	/\bGROUP/i,
	/\bLEVEL/i,
	/\bGRANT/i,
	/\bSPACE/i,
	/\bLIMIT/i,
	/\bLOCAL/i,
	/\bFOUND/i,
	/\bFORCE/i,
	/\bRESET/i,
	/\bFLOOR/i,
	/\bSTART/i,
	/\bSTATE/i,
	/\bFLOAT/i,
	/\bFIRST/i,
	/\bFINAL/i,
	/\bSTDIN/i,
	/\bLOWER/i,
	/\bMATCH/i,
	/\bMERGE/i,
	/\bSTRIP/i,
	/\bSTYLE/i,
	/\bFETCH/i,
	/\bABORT/i,
	/\bFALSE/i,
	/\bMONTH/i,
	/\bEVERY/i,
	/\bSYSID/i,
	/\bEVENT/i,
	/\bMUMPS/i,
	/\bTABLE/i,
	/\bNAMES/i,
	/\bEMPTY/i,
	/\bINOUT/i,
	/\bNCHAR/i,
	/\bNCLOB/i,
	/\bTOKEN/i,
	/\bDEREF/i,
	/\bDEPTH/i,
	/\bCYCLE/i,
	/\bREADS/i,
	/\bCROSS/i,
	/\bTREAT/i,
	/\bCOUNT/i,
	/\bRANGE/i,
	/\bTYPES/i,
	/\bCOBOL/i,
	/\bCLOSE/i,
	/\bUNDER/i,
	/\bCLASS/i,
	/\bUNION/i,
	/\bQUOTE/i,
	/\bCHECK/i,
	/\bCHAIN/i,
	/\bUNTIL/i,
	/\bNTILE/i,
	/\bUPPER/i,
	/\bUSAGE/i,
	/\bPRIOR/i,
	/\bCACHE/i,
	/\bUSING/i,
	/\bVALID/i,
	/\bVALUE/i,
	/\bNULLS/i,
	/\bPOWER/i,
	/\bBEGIN/i,
	/\bPLANS/i,
	/\bORDER/i,
	/\bARRAY/i,
	/\bOUTER/i,
	/\bVIEWS/i,
	/\bALTER/i,
	/\bWHERE/i,
	/\bAFTER/i,
	/\bADMIN/i,
	/\bOWNED/i,
	/\bOWNER/i,
	/\bWRITE/i,
	/\bDESC/i,
	/\bLAST/i,
	/\bLOCK/i,
	/\bNFKC/i,
	/\bREAL/i,
	/\bDATE/i,
	/\bDATA/i,
	/\bFLAG/i,
	/\bSHOW/i,
	/\bCUBE/i,
	/\bINTO/i,
	/\bSELF/i,
	/\bREAD/i,
	/\bSIZE/i,
	/\bCOST/i,
	/\bCORR/i,
	/\bTRIM/i,
	/\bCOPY/i,
	/\bTRUE/i,
	/\bRANK/i,
	/\bSKIP/i,
	/\bTYPE/i,
	/\bLEAD/i,
	/\bGOTO/i,
	/\bFILE/i,
	/\bCLOB/i,
	/\bSOME/i,
	/\bLIKE/i,
	/\bROWS/i,
	/\bHOUR/i,
	/\bMODE/i,
	/\bNFKD/i,
	/\bCHAR/i,
	/\bEXEC/i,
	/\bCEIL/i,
	/\bNONE/i,
	/\bLINK/i,
	/\bCAST/i,
	/\bFULL/i,
	/\bLOAD/i,
	/\bMORE/i,
	/\bUSER/i,
	/\bCASE/i,
	/\bHOLD/i,
	/\bCALL/i,
	/\bMOVE/i,
	/\bFREE/i,
	/\bNULL/i,
	/\bROLE/i,
	/\bBOTH/i,
	/\bBLOB/i,
	/\bNAME/i,
	/\bENUM/i,
	/\bJOIN/i,
	/\bOIDS/i,
	/\bSQRT/i,
	/\bONLY/i,
	/\bOPEN/i,
	/\bTEMP/i,
	/\bELSE/i,
	/\bYEAR/i,
	/\bEACH/i,
	/\bTEXT/i,
	/\bVIEW/i,
	/\bTHEN/i,
	/\bTIES/i,
	/\bWHEN/i,
	/\bALSO/i,
	/\bRULE/i,
	/\bDROP/i,
	/\bLEFT/i,
	/\bOVER/i,
	/\bWITH/i,
	/\bPATH/i,
	/\bFROM/i,
	/\bWORK/i,
	/\bNEXT/i,
	/\bSETS/i,
	/\bTIME/i,
	/\bDEC/i,
	/\bOUT/i,
	/\bHEX/i,
	/\bAND/i,
	/\bURI/i,
	/\bNOT/i,
	/\bANY/i,
	/\bMIN/i,
	/\bCSV/i,
	/\bKEY/i,
	/\bMOD/i,
	/\bARE/i,
	/\bPAD/i,
	/\bABS/i,
	/\bZONE/i,
	/\bLAG/i,
	/\bADA/i,
	/\bGET/i,
	/\bEND/i,
	/\bFOR/i,
	/\bEXP/i,
	/\bYES/i,
	/\bMAP/i,
	/\bSET/i,
	/\bINT/i,
	/\bOFF/i,
	/\bASC/i,
	/\bSUM/i,
	/\bBIT/i,
	/\bOLD/i,
	/\bAVG/i,
	/\bREF/i,
	/\bMAX/i,
	/\bNEW/i,
	/\bALL/i,
	/\bROW/i,
	/\bNFC/i,
	/\bNFD/i,
	/\bDAY/i,
	/\bADD/i,
	/\bNIL/i,
	/\bSQL/i,
	/\bPLI/i,
	/\bXML/i,
	/\bBOM/i,
	/\bIF/i,
	/\bTO/i,
	/\bAS/i,
	/\bOR/i,
	/\bON/i,
	/\bOF/i,
	/\bNO/i,
	/\bAT/i,
	/\bLN/i,
	/\bBY/i,
	/\bIS/i,
	/\bIN/i,
	/\bDB/i,
	/\bID/i,
	/\bGO/i,
	/\bDO/i,
	/\bFS/i,
	/\bG/i,
	/\bT/i,
	/\bC/i,
	/\bK/i,
	/\bM/i,
	/\bP/i,
	/\bA/i,
];

Prism.languages.plsql['operator'] = [
	/\:\=/,
	/~\<\=~/,
	/~\>\=~/,
	/\!~~\*/,
	/#\<\>/,
	/\|\>\>/,
	/\*\<\>/,
	/~\<~/,
	/@@@/,
	/\*\<\=/,
	/\-\>\>/,
	/~~\*/,
	/\<\<\=/,
	/\<#\>/,
	/#\>\=/,
	/\<\<\|/,
	/\|&\>/,
	/\?\-\|/,
	/#\<\=/,
	/\*\>\=/,
	/~\>~/,
	/\|\|\//,
	/\?\|\|/,
	/@\-@/,
	/\!~~/,
	/\!~\*/,
	/\-\|\-/,
	/\>\>\=/,
	/#\>\>/,
	/\<\-\>/,
	/&\<\|/,
	/\<\?\>/,
	/&\>/,
	/\!~/,
	/\|\|/,
	/\?#/,
	/#\>/,
	/~\*/,
	/#\</,
	/\*\</,
	/\|\//,
	/\>\=/,
	/\>\^/,
	/\*\=/,
	/\?&/,
	/&\</,
	/@@/,
	/&&/,
	/\-\>/,
	/\<\^/,
	/\?\|/,
	/\<@/,
	/@\>/,
	/~~/,
	/~\=/,
	/##/,
	/#\=/,
	/#\-/,
	/\*\>/,
	/\>\>/,
	/\<\</,
	/\<\>/,
	/\<\=/,
	/\!\!/,
	/\?\-/,
	/\=/,
	/%/,
	/\|/,
	/\</,
	/\//,
	/#/,
	/~/,
	/@/,
	/\+/,
	/&/,
	/\?/,
	/\^/,
	/\-/,
	/\!/,
	/\*/,
	/\>/
];