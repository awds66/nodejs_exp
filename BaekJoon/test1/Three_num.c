#include<stdio.h>
int main(){
    int input[3];
    int temp;
    scanf("%d %d %d",&input[0],&input[1],&input[2]);
    
    for(int i=0;i<3; i++){
        for(int j=0; j<2; j++){
            if(input[j]>= input[j+1]){
                temp = input[j];
                input[j]=input[j+1];
                input[j+1]=temp;
            }
        }
    }
    printf("%d\n", input[1]);
    return 0;
}