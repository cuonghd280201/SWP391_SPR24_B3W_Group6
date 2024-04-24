package tourbooking.utils;

import lombok.experimental.UtilityClass;

import java.text.ParseException;
import java.time.LocalDate;
import java.util.Random;

@UtilityClass
public class CodeGenerator {

    public String randomNumberGenerate(){
        Random random = new Random();
        int randomNumber = random.nextInt(10000);
        return String.format("%04d", randomNumber);
    }

    public String generate(String codeType){
        String stringDate = DateTimeUtils.convertLocalDateToString(LocalDate.now());
        String randomNumber = randomNumberGenerate();
        return "FPT-" + codeType + "-" + stringDate + "-" + randomNumber;
    }

    public String generateAddCode(String codeType, LocalDate createDate){
        String stringDate = DateTimeUtils.convertLocalDateToString(createDate);
        String randomNumber = randomNumberGenerate();
        return "FPT-" + codeType + "-" + stringDate + "-" + randomNumber;
    }
}
