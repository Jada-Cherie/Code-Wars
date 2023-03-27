function noSpace(x){
    return x.replace(/\s/g, '');
    }

    // \s means "one space", and \s+ means "one or more spaces". But, because you're using the /g flag (replace all occurrences) and replacing with the empty string, your two expressions have the same effect. Follow this answer to receive notifications.