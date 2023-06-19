function solution(new_id) {
    // 단계 1: 모든 글자를 소문자로 변환합니다.
    new_id = new_id.toLowerCase();

    // 단계 2: 소문자, 숫자, 마이너스(-), 언더스코어(_), 마침표(.)를 제외한 모든 문자를 제거합니다.
    let allowed_chars = 'abcdefghijklmnopqrstuvwxyz0123456789-_.';
    let temp = '';
    for(let i = 0; i < new_id.length; i++) {
        if(allowed_chars.includes(new_id[i])) {
            temp += new_id[i];
        }
    }
    new_id = temp;

    // 단계 3: 연속된 마침표(.)를 하나의 마침표로 치환합니다.
    let prev_char = '';
    temp = '';
    for(let i = 0; i < new_id.length; i++) {
        if(!(new_id[i] === '.' && prev_char === '.')) {
            temp += new_id[i];
        }
        prev_char = new_id[i];
    }
    new_id = temp;

    // 단계 4: 시작이나 끝에 있는 마침표(.)를 제거합니다.
    if(new_id.startsWith('.')) {
        new_id = new_id.slice(1);
    }
    if(new_id.endsWith('.')) {
        new_id = new_id.slice(0, -1);
    }

    // 단계 5: new_id가 빈 문자열이면, new_id에 "a"를 할당합니다.
    if(new_id === '') {
        new_id = 'a';
    }

    // 단계 6: new_id가 15자 이상이면, 처음 15자를 제외한 나머지를 모두 제거합니다.
    if(new_id.length > 15) {
        new_id = new_id.slice(0, 15);
        if(new_id.endsWith('.')) {
            new_id = new_id.slice(0, -1);
        }
    }

    // 단계 7: new_id가 3자 미만이면, new_id의 마지막 문자를 반복하여 new_id가 3자가 될 때까지 추가합니다.
    while(new_id.length < 3) {
        new_id += new_id[new_id.length - 1];
    }

    return new_id;
}
