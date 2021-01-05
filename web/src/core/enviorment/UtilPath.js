export const getPath = (lang, relativePath)=>{
    let returnPath = ''
    const defaultlanguage = process.env.GATSBY_DEFAULT_LANGUAGE 
    let inputLang = lang?lang: defaultlanguage
    
    returnPath = inputLang !== defaultlanguage?`/${inputLang}/`:`/`
    if(relativePath)
       returnPath = `${returnPath}${relativePath}` 
    
    return returnPath
}

