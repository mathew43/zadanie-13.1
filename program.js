process.stdin.setEncoding('utf-8');

process.stdin.on('readable', function() {
    var input = process.stdin.read();
    if(input !== null) {
        var instruction = input.trim();
        switch(instruction) {
            case 'version':
                process.stdout.write(process.versions.node);
                break;
            case '/lang':
                process.stdout.write(process.env.LANG);
                break;
            default:
                process.stderr.write('Wrong instruction!\n');
        };
    }
});