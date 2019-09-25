# file-validator-app
This is a test utility app useful for input Vs Output field mapping. Currently functionality for mapping inp Vs op 
has been implemented for fixed length file . It reads all the mapping details from the filesystem by looking into the arguments of this 
utility and gives the following details :

  inpFldName
  inpFldVal
  transformInd
  opFldName
  opFldVal
  
Usage : 
D:\workspace_NJ_ANG_EXT\file-validator-app>node app mapfixed
app mapfixed

Mapping a input field to a output field for a fixed formatted file

Options:
  --help     Show help                                                 [boolean]
  --version  Show version number                                       [boolean]
  --inpfld   Name of the input field                         [string] [required]
  --keyfld   Name of the key field used to uniquely match input and output
                                                             [string] [required]
  --keyval   Value of the key field used to uniquely match input and output
                                                             [number] [required]

Missing required arguments: inpfld, keyfld, keyval

D:\workspace_NJ_ANG_EXT\file-validator-app>


Steps:
1.) Insert the following mapping details of the field you want to validate in the ipVsOpMapping.cfg :
E.g:
#inputfieldName,inpFldStartPosition,inpFldEndPosition,formatInput,opFldName,opFldStartPosition,opFldEndPosition
inpfld1,13,23,notransform,opfld1,5,15
inpfld2,13,23,notransform,opfld2,5,15
inpfld3,13,23,notransform,opfld3,5,15
inpfld4,13,23,notransform,opfld4,5,15

2.) Copy the input and output file layout into the layout directory

3.) Place the input file in the input directory. File name should be like "testInp"
4.) Place the output file in the output directory. File name should be like "testop"


Please be noted that this app is a CLI and is tested locally on windows. However a fullstack version of this app is being developed 
as a part of enhancement to make it more user interactive. Though this app caters to fixed length files currently , plans will be made 
to enhance this app for different filetypes.  


